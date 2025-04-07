import styles from "./menuItem.module.scss";
import { dataItemInterface } from "./types";
import { IoMdCheckmark } from "react-icons/io";

interface Props {
  data: dataItemInterface;
  onClick: (data: dataItemInterface) => void;
  isSelected: boolean;
}

const MenuItem = ({ data, onClick, isSelected }: Props) => {
  return (
    <button
      className={`${styles.root} ${isSelected && styles["root--selected"]}`}
      onClick={() => onClick(data)}
    >
      <div className={styles.root__textIconContainer}>
        <span className={isSelected ? styles["root__text--selected"] : ""}>
          {data.text}
        </span>
        <span className={styles.root__icon}>{data.icon}</span>
      </div>
      {isSelected && (
        <span className={styles.root__tickIconContainer}>
          <IoMdCheckmark className={styles.root__tickIcon} />
        </span>
      )}
    </button>
  );
};

export default MenuItem;
