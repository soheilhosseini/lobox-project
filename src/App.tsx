import { useState } from "react";
import styles from "./App.module.scss";
import DropDown from "./components/dropDown/dropDown";
import { dataItemInterface } from "./components/dropDown/types";
import { v4 as uuidv4 } from "uuid";
import LoboxLogo from "./assets/logoWithText.png";

const mockData: dataItemInterface[] = [
  { text: "Education 🎓", value: "education", _id: uuidv4() },
  { text: "Art 🎭", value: "art", _id: uuidv4() },
  { text: "Sport ⚽️", value: "sport", _id: uuidv4() },
];

function App() {
  const [list, setList] = useState(mockData);

  const apiSimulation = (value: string) => {
    const transformedText = value.trim().toLowerCase();
    const isDuplicated = list.some((item) => item.value === transformedText);

    if (!isDuplicated) {
      const newItem: dataItemInterface = {
        text: value.trim(),
        value: transformedText,
        _id: uuidv4(),
      };
      setList((prev) => [newItem, ...prev]);
    } else {
      alert("That value already exists!");
    }
  };

  return (
    <div className={styles.root}>
      <img className={styles.root__logo} src={LoboxLogo} />
      <DropDown list={list} handleAdd={apiSimulation} />
    </div>
  );
}

export default App;
