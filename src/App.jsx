import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Home from "./components/Home";

function App() {
  return (
    <>
      <header>
      <Navbar />
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<ItemListContainer/> } />
        <Route path="/products/:id" element={<CardDetails/>}/>
        <Route path="/category/:categotyName" element={<ItemListContainer/>} /> 
      </Routes>  

      </main> 
      
      

      
    </>
  );
}

export default App;
