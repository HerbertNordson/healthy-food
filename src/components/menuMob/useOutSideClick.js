import { useState, useEffect } from "react";

export const useOutSideClick = (event, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (ev) => {
      if (event.current !== null && !event.current.contains(ev.target)) {
        setIsActive(!isActive);
      }

      if (isActive) {
        window.addEventListener("click", onClick);
      }

      return () => {
        window.removeEventListener("click", onClick);
      };
    };
  }, [isActive, event]);

  return [isActive, setIsActive];
};
