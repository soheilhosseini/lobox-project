import styles from "./menu.module.scss";
import MenuItem from "./menuItem";
import { dataItemInterface } from "./types";

interface Props {
  onClick: (data: dataItemInterface) => void;
  data: dataItemInterface[];
  selectedItemId: string;
}

const Menu = ({ onClick, data = [], selectedItemId }: Props) => {
  return (
    <div className={styles.root}>
      {data.length > 0 ? (
        data.map((item) => (
          <MenuItem
            key={item.value}
            data={item}
            onClick={onClick}
            isSelected={item._id === selectedItemId}
          />
        ))
      ) : (
        <p className={styles.root__noOption}>No Option</p>
      )}
    </div>
  );
};

export default Menu;
