import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../assets/Icons";
const Popup = ({ title, children, width = "800px", closeHandler }) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [actualHeight, setActualHeight] = useState(null);
  const popupBody = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (popupBody.current) {
        const calculatedHeight = popupBody.current.clientHeight + 60;
        setActualHeight(calculatedHeight);
        setScreenHeight(window.innerHeight);
      }
    };

    // Initial update
    updateHeight();

    // Resize event listener
    window.addEventListener("resize", updateHeight);

    // Mutation Observer
    const mutationObserver = new MutationObserver(updateHeight);

    if (popupBody.current) {
      mutationObserver.observe(popupBody.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="fixed w-full h-full left-0 top-0 z-[103] popup-open scrollbarNone overflow-auto">
      <div
        className={`absolute left-1/2 bg-white -translate-x-1/2 w-full z-[12] max-lg:w-[85%] xl:rounded-30 rounded-lg py-8 lg:px-10 px-6 ${
          actualHeight && screenHeight < actualHeight
            ? "top-[10%]"
            : "top-1/2 -translate-y-1/2"
        } `}
        style={{ maxWidth: width }}
        ref={popupBody}
      >
        <div className={`bg-lightBg flex justify-between items-center`}>
          <h3 className="lg:text-[32px] text-2xl">{title}</h3>
          <button
            type="button"
            onClick={closeHandler}
            className="w-[34px] h-[34px] bg-[#E6E6E6] rounded-full flex items-center justify-center"
          >
            <CloseIcon />
          </button>
        </div>
        {children && <div className="relative">{children}</div>}
      </div>
    </div>
  );
};

export default Popup;
