import { useEffect, useRef, useState } from "react";
import styles from "./dropDown.module.scss";
import Input from "./input";
import Menu from "./menu";
import { dataItemInterface } from "./types";
import useIfClickedOnElement from "../../hooks/useIfClickedOnElement";
import { emojisRegex } from "../../constants";

interface Props {
  list: dataItemInterface[];
  handleAdd: (value: string) => void;
}

const DropDown = ({ list, handleAdd }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useIfClickedOnElement({ ref, callback: setIsFocused });
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleOpenMenu = () => setIsFocused(true);

  useEffect(() => {
    setInputValue(
      selectedItemIds.reduce((acc, _id) => {
        return (
          acc +
          list
            .find((item) => item._id === _id)
            ?.value.replace(emojisRegex, "")
            .trim() +
          " "
        );
      }, "")
    );
  }, [selectedItemIds, list]);

  const handleItemClicked = (item: dataItemInterface) => {
    if (selectedItemIds.includes(item._id)) {
      setSelectedItemIds((prev) => prev.filter((_id) => item._id !== _id));
    } else {
      setSelectedItemIds((prev) => [...prev, item._id]);
    }
  };

  const handleSetInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newItem = formData.get("newItem") as string;
    if (newItem) {
      handleAdd(newItem);
      setInputValue("");
      setSelectedItemIds([]);
    }
  };

  return (
    <div className={styles.root} ref={ref} id="dropDownRoot">
      <form onSubmit={handleFormSubmit}>
        <Input
          value={inputValue}
          setValue={handleSetInputValue}
          placeholder="Write, then press Enter to add"
          onClick={handleOpenMenu}
          isFocused={isFocused}
        />
      </form>
      {isFocused && (
        <Menu
          onClick={handleItemClicked}
          data={list}
          selectedItemIds={selectedItemIds}
        />
      )}
    </div>
  );
};
export default DropDown;
