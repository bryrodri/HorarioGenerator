import './App.css';

import { BrowserRouter as Router, Route , Redirect, Switch } from 'react-router-dom';

//componentes
import Nav from './Componentes/nav/nav'
import ClasicBuilder from './Componentes/ClasicBuilder/clasicBuilder'
import Home from './Componentes/Home/home'
import Manual from './Componentes/manual/manual'

import Foot from './Componentes/foot/foot'

function App() {
  
  return (
    <div className="App">
      

      <Router>
        <Nav></Nav>

        <Switch>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/Builder" component={ClasicBuilder}></Route>
        <Route exact path="/Manual" component={Manual}></Route>
        <Route exact path="/"><Redirect to="/Home" /> </Route>
        {/* <Route exact path="/404" component={NotFound}></Route> */}
        {/* <Route >
          <Redirect to="/404" /> 
        </Route> */}
        </Switch>


        <Foot></Foot>
      
      
      </Router>



    </div>
  );
}

export default App;
