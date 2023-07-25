import { useNavigate } from "react-router-dom";
import exit from "../04Images/exit.png";

export const LoggedUserAndExist = () => {
  const userInfo: string = localStorage.getItem("userEmail")!;

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-[10%]">
      <h1>{userInfo}</h1>
      <img src={exit} onClick={handleLogOut} className="w-[50px] h-auto" />
    </div>
  );
};
