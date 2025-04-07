import styles from "./menu.module.scss";
import MenuItem from "./menuItem";
import { dataItemInterface } from "./types";

interface Props {
  onClick: (data: dataItemInterface) => void;
  data: dataItemInterface[];
  handleClose: () => void;
}

const Menu = ({ onClick, handleClose, data = [] }: Props) => {
  return (
    <div className={styles.root}>
      {data.length > 0 ? (
        data.map((item) => <MenuItem data={item} onClick={onClick} />)
      ) : (
        <p className={styles.root__noOption} onClick={handleClose}>
          No Option
        </p>
      )}
    </div>
  );
};

export default Menu;
