import styles from "./input.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Input = ({ placeholder = "" }) => {
  return (
    <label className={styles.root}>
      <input
        className={styles.root__input}
        type="text"
        placeholder={placeholder}
      />
      <MdOutlineKeyboardArrowDown className={styles.root__arrowIcon} />
    </label>
  );
};
export default Input;
