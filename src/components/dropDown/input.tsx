import styles from "./input.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { dataItemInterface } from "./types";

interface Props {
  placeholder: string;
  onClick: () => void;
  data: dataItemInterface;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder = "", data, setValue, onClick }: Props) => {
  return (
    <label className={styles.root} onClick={onClick}>
      <input
        className={styles.root__input}
        type="text"
        placeholder={placeholder}
        value={data.text}
        onChange={setValue}
      />
      <MdOutlineKeyboardArrowDown className={styles.root__arrowIcon} />
    </label>
  );
};
export default Input;
