import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import './App.css'



const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos"}/>
    </>
  )
};

export default App;
