import './App.css';

//Components 
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
export const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Productos aqui"} />
    </>
  )
}