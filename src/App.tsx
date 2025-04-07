import styles from "./App.module.scss";
import DropDown from "./components/dropDown/dropDown";

function App() {
  return (
    <div className={styles.root}>
      <DropDown />
    </div>
  );
}

export default App;
