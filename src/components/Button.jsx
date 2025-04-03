import React from "react";

const Button = ({
  clickEvent,
  btnType = "fill",
  title,
  className = "",
  isLoading,
  type = "button",
  attributes,
}) => {
  // Handle the event on click of Button
  const checkEvent = () => {
    if (clickEvent) {
      clickEvent();
    }
  };

  const baseClasses =
    "text-center w-full font-medium transition-all duration-300 rounded-xl px-5 py-2 lg:text-xl min-w-[179px] max-w-[179px]";
  const btnStyles = {
    fill: "bg-primary text-white border border-primary hover:bg-white hover:text-primary",
    transparent:
      "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
    white:
      "bg-transparent text-white border border-white hover:bg-white hover:text-primary",
  };

  return (
    <button
      onClick={checkEvent}
      className={`${baseClasses} ${btnStyles[btnType]} ${className}`}
      type={type}
      {...attributes}
    >
      {isLoading && (
        <span className="inline-block w-5 h-5 border-2 border-white border-b-transparent rounded-full animate-spin align-middle"></span>
      )}
      <span className={`${isLoading ? "hidden" : "inline"}`}>{title}</span>
    </button>
  );
};

export default Button;
