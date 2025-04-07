import { useEffect, useRef, useState } from "react";
import styles from "./dropDown.module.scss";
import Input from "./input";
import Menu from "./menu";
import { dataItemInterface } from "./types";
import { CiHeart } from "react-icons/ci";
import { FaGlassMartiniAlt } from "react-icons/fa";
const mockData = [
  {
    text: "Education",
    value: "education",
    icon: <CiHeart />,
  },
  {
    text: "Art",
    value: "art",
    icon: <FaGlassMartiniAlt />,
  },
];

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<dataItemInterface>({
    text: "",
    value: "",
    icon: <></>,
  });
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOut);
    return () => document.removeEventListener("click", handleClickOut);
  }, []);

  const handleOpenMenu = () => setOpen(true);

  const handleClickOut = (e: MouseEvent) => {
    if (ref?.current) {
      setOpen(ref.current.contains(e.target as Node));
    }
  };

  const handleItemClicked = (data: dataItemInterface) => {
    setInputValue(data);
    handleClose();
  };

  const handleClose = () => setOpen(false);

  const handleSetInputValue = (e) => setInputValue(e.target.value);

  return (
    <div className={styles.root} ref={ref} id="dropDownRoot">
      <Input
        data={inputValue}
        setValue={handleSetInputValue}
        placeholder="Write Here"
        onClick={handleOpenMenu}
      />
      {open && (
        <Menu
          handleClose={handleClose}
          onClick={handleItemClicked}
          data={mockData}
        />
      )}
    </div>
  );
};
export default DropDown;
