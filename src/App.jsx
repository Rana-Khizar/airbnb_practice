import Card from "./component/Card";
import List from "./component/List";
import Navbar from "./component/Navbar";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <hr />
      <List />

      <Card />
    </>
  );
};

export default App;
