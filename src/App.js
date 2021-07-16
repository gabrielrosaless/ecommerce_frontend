import './App.css';
import react from 'react';
import { Navbar, ItemList, ItemDetail, Cart, ItemCarga} from './components';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


class App extends react.Component{
  
  render(){
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              <ItemList/>
            </Route>
            <Route exact path='/item/:id'>
              <ItemDetail/>
            </Route>
            <Route exact path='/cart'>
              <Cart/>
            </Route>
            <Route exact path='/admin/carga'>
              <ItemCarga/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
  


export default App;
