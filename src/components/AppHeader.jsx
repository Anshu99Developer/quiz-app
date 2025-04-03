import { useLocation } from "react-router-dom";
import logo from "../assets/images/quizLogo.png";
import Button from "./Button";
export const AppHeader = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="relative w-full h-[80px] border-b border-borderColor px-4">
      <div className="max-w-[1224px] mx-auto flex items-center justify-between w-full h-full">
        <div className="app-logo">
          <img
            src={logo}
            alt="app-logo"
            className="h-[23px] w-full max-w-[144px]"
          />
        </div>
        <div className="">
          {pathname === "/quiz" && (
            <Button title="Exit Quiz" btnType="transparent" />
          )}
        </div>
      </div>
    </div>
  );
};
