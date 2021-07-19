import './App.css';
import React, { useState } from 'react';
import { Navbar, ItemList, ItemDetail, Cart, ItemCarga,Login} from './components';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";


// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
    // const [token, setToken] = useState();
    // const { token, setToken } = useToken();
    
    const token = getToken();
    // if(!token) {
    //   return <Login setToken={setToken} />
    // }

    
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
            <Route exact path='/login'>
              <Login/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
}


export default App;
