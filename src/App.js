import './App.css';
import react from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Configura en App.js el routing usando un BrowserRouter con react-router-dom. Rutas sugeridas a configurar:
// - / navega a <ItemListContainer/>
// - ‘/categoria/:id’ navega a <ItemListContainer/>
// - ‘/item/:id’ navega a <ItemDetailContainer>
// - ‘/cart’ navega a <Cart>
// - ‘/admin-items’ navega a <ItemListAdmin>
// - ‘/admin-item/:id’ navega a <ItemDetailAdmin>

class App extends react.Component{
  
  render(){
    return (
      <Router>
        <Navbar/>
        <div>
          <Link to="/">Home</Link>
          <Link to="/categoria/:id">Categoria</Link>
          <Link to="/item/:id">Item</Link>
          {/* <Link to="/cart">Cart</Link>
          <Link to="/admin-items">Admin items</Link>
          <Link to="/admin-item/:id">Admin item</Link> */}
          <hr />
          <Switch>
            <Route exact path="/">
              <ItemList />
            </Route>
            <Route exact path="/categoria/:id">
              <ItemList />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetail />
            </Route>
            {/* <Route exact path="/cart">
              <ItemList />
            </Route>
            <Route exact path="/admin-items">
              <ItemList />
            </Route>
            <Route exact path="/admin-item/:id">
              <ItemList />
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
    // return (
    //   <div className="App">
    //     <Navbar/>
    //     <ItemList/>
    //     {/* <Item/> */}
    //     {/* <p>{this.state.apiResponse}</p> */}
    //   </div>
    // );
  }
}
  


export default App;
