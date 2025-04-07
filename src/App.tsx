import styles from "./App.module.scss";
import Input from "./components/dropDown/input";

function App() {
  return (
    <div className={styles.root}>
      <Input placeholder="Write Here" />
    </div>
  );
}

export default App;
