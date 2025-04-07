import { useEffect } from "react";

interface Props {
  ref: React.RefObject<HTMLDivElement | null>;
  callback: (boolean: boolean) => void;
}

const useIfClickedOnElement = ({ ref, callback }: Props) => {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOut);
    return () => document.removeEventListener("mousedown", handleClickOut);
  }, []);

  const handleClickOut = (e: MouseEvent) => {
    if (ref?.current) {
      callback(ref.current.contains(e.target as Node));
    }
  };
};

export default useIfClickedOnElement;
