import styles from "./input.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props {
  placeholder: string;
  onClick: () => void;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused: boolean;
}

const Input = ({
  placeholder = "",
  value,
  setValue,
  onClick,
  isFocused,
}: Props) => {
  return (
    <div
      className={`${styles.root} ${isFocused && styles["root--focused"]}`}
      onClick={onClick}
    >
      <input
        className={styles.root__input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        name="newItem"
        autoComplete={"off"}
      />
      <MdOutlineKeyboardArrowDown
        className={`${styles.root__arrowIcon} ${
          isFocused && styles["root__arrowIcon--rotate"]
        }`}
      />
    </div>
  );
};

export default Input;
