import React, { useEffect, useState } from "react";
import { LogoPng } from "../03Components/logoComponent";
import { Background } from "../03Components/Background";
import { LoggedUserAndExist } from "../03Components/LoggedUserAndExist";


export const Chef: React.FC = () => {
    const [statusType, setStatusType] = useState("pendiente");
    const handleSelectStatusType = (type: string) => {
        setStatusType(type);
      };
  return (
    <article className="h-[97vh] flex flex-col m-[20px]">
      {/* ---HEADER(LOGO + MESERO)--- */}
      <header className=" z-1 w-[100%] h-[20%] mb-[20px] flex items-center justify-between">
        <LogoPng />
        <div className="w-[100%] h-[100%] flex flex-col items-end">
          <LoggedUserAndExist />
          <label
            id="waiterPg"
            className="font-bold text-[90px] text-crema border-brownText drop-shadow-[4px_4px_0.5px_#65362A]"
          >
            COCINER@
          </label>
        </div>
      </header>
      <main id="content" className=" z-1 h-[80%] w-[100%]">
        {/* ---entregado- pendiente--- */}
        <section
          id="list"
          className=" h-[10%] w-[100%] flex flex-row justify-end"
        >
          <div
            className={`h-[100%] w-[250px] bg-crema rounded-tl-[25px] text-3xl font-bold flex items-center justify-center ${
              statusType === "pendiente"
                ? "textTransform: uppercase"
                : "bg-yellow" // Aplicamos estilo con bg-yellow si es el tipo de producto seleccionado
            }`}
            onClick={() => handleSelectStatusType("pendiente")} // Manejador para seleccionar desayuno
          >
            <label>Pendiente</label>
          </div>
          <div
            className={`h-[100%] w-[250px] bg-crema rounded-tr-[25px] text-3xl font-bold flex items-center justify-center ${
              statusType === "entregado"
                ? "textTransform: uppercase"
                : "bg-yellow" // Aplicamos estilo con bg-yellow si es el tipo de producto seleccionado
            }`}
            onClick={() => handleSelectStatusType("entregado")} // Manejador para seleccionar desayuno
             >
            <label>Entregado</label>
          </div>
        </section>

        <section
          id="menuYCompra"
          className=" h-[755px] w-[100%] bg-crema p-[20px] overflow-auto"
        >
          {/* ---Name + Table--- */}
          <div
            id="nameAndTable"
            className="h-[10%] w-[100%] p-[1%] flex flex-row justify-evenly items-center gap-1"
          >
            <label>Nombre:</label>
            <input
              type="text"
              className="bg-skin h-[50%] w-[40%] rounded-5"
            ></input>
            <label>Mesa:</label>
            <input
              type="number"
              className="bg-skin h-[50%] w-[40%] rounded-5"
            ></input>
          </div>

          {/* ---lista de pedidos--- */}
          <div
            id="orderList"
            className="h-auto w-[100%] p-[1%] flex flex-wrap justify-center justify-evenly text-center gap-y-4"
          >
            holaaa{" "}
          </div>

          {/* ---Shopping Cart--- */}

          <div
            id="cart"
            className="h-auto w-[100%] p-[5%] text-[1.5rem] font-bold"
          >
            {/* ---Titles--- */}
            <div
              id="titles"
              className="h-[50px] w-[100%] grid grid-cols-10 gap-1 text-center mb-[15px]"
            >
              <div
                id="product"
                className="bg-yellow col-span-3 rounded-tl-[15px]"
              >
                Producto
              </div>
              <div id="quantity" className="bg-yellow col-span-4">
                Cantidad
              </div>
              <div
                id="status"
                className="bg-yellow col-span-2 rounded-tr-[15px]"
              >
                Estado
              </div>
            </div>
          </div>

          {/* ---Send Buttom--- */}
          <div
            id="SendButtom"
            className="h-[10%] w-[100%] flex justify-center items-center"
          ></div>
        </section>
      </main>

      {/* ---Background--- */}
      <Background />
    </article>
  );
};
