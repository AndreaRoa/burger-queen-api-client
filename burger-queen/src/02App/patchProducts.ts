
export function patchProducts(id: number, name:string, price: string, type:string){
    const token: string = localStorage.getItem("token")!;
    console.log(token);
    return(fetch(`http://localhost:8080/products/${id}`,{
         method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
              },
      body: JSON.stringify({
        name: name,
        price: price,
        type: type,
       
      }),
      })
      .then(response=>{
       return response;
      })
      .catch(error=>{
        console.error("red error",error)
      })
    )
  }
