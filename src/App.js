//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import MainBar from './components/MainBar';
import ItemDetailContainer from './components/ItemDetailContainer';
//import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <div>
    
      {/*
      <MainBar />
      <ItemListContainer catalogo="Categoria de Productos"></ItemListContainer>
      <ItemDetailContainer catalogo="Producto"/>
      */}    
      
      
      <ItemDetailContainer catalogo="Producto"/>
      


    </div>
  );
}

export default App;
