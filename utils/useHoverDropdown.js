import { useRef } from "react";

export function useHoverDropdown() {
  const timeout = useRef(null);

  const handleEnter = (setOpen) => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const handleLeave = (setOpen) => {
    timeout.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return { handleEnter, handleLeave };
}
