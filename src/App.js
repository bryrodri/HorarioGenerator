import './App.css';

//componentes
import Nav from './Componentes/nav/nav'
import ClasicBuilder from './Componentes/ClasicBuilder/clasicBuilder'
import Home from './Componentes/Home/home'
import SelectionTipe from './Componentes/SelectionTipe/selectionTipe'
import VisualBuilder from './Componentes/VisualBuilder/visualBuilder'

function App() {
  
  return (
    <div className="App">
      
      <Nav></Nav>
      {/* <ClasicBuilder></ClasicBuilder> */}
      <Home></Home>
    </div>
  );
}

export default App;
