import styles from "./menu.module.scss";
import MenuItem from "./menuItem";
import { dataItemInterface } from "./types";

interface Props {
  onClick: (data: dataItemInterface) => void;
  data: dataItemInterface[];
  selectedItemIds: string[];
}

const Menu = ({ onClick, data = [], selectedItemIds }: Props) => {
  return (
    <div className={styles.root}>
      {data.length > 0 ? (
        data.map((item) => (
          <MenuItem
            key={item.value}
            data={item}
            onClick={onClick}
            isSelected={selectedItemIds.includes(item._id)}
          />
        ))
      ) : (
        <p className={styles.root__noOption}>No Option</p>
      )}
    </div>
  );
};

export default Menu;
