import styles from "./menuItem.module.scss";
import { dataItemInterface } from "./types";

interface Props {
  data: dataItemInterface;
  onClick: (data: dataItemInterface) => void;
}

const MenuItem = ({ data, onClick }: Props) => {
  return (
    <button className={styles.root} onClick={() => onClick(data)}>
      <span>{data.text}</span>
      <span className={styles.root__icon}>{data.icon}</span>
    </button>
  );
};

export default MenuItem;
