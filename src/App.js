//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import MainBar from './components/MainBar';


function App() {
  return (
    <div>
      
      <MainBar />
      <ItemListContainer titulo="Categoria de Productos">
        </ItemListContainer>      
        
    </div>
  );
}

export default App;
