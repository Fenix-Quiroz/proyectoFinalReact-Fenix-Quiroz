import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido/a" />
    </div>
  );
}

export default App;
