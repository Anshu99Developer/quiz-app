import logo from "../assets/images/quizLogo.png";
import Button from "./Button";
export const AppHeader = () => {
  return (
    <div className="relative w-full h-[80px] border-b border-borderColor">
      <div className="max-w-[1224px] mx-auto flex items-center justify-between w-full h-full">
        <div className="app-logo">
          <img
            src={logo}
            alt="app-logo"
            className="h-[23px] w-full max-w-[144px]"
          />
        </div>
        <div className="">
          <Button title="Exit Quiz" btnType="transparent"/>
        </div>
      </div>
    </div>
  );
};
