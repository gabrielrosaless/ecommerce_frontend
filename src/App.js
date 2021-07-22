import './App.css';
import React, { useState } from 'react';
import { Navbar, ItemList, ItemDetail, Cart, ItemCarga,Login, SignUp} from './components';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import useToken from './utils/useToken';
import jwt from 'jwt-decode';



function App() {

    const { token, setToken } = useToken();

    

    const Visible = ({ roles, children }) => {
      
      if (token){
        const user = jwt(token);
        const rolesMatch = roles && user.rol === roles;
        return Boolean(rolesMatch) && children;
      }
      return false;
    };
    
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
            <Route exact path='/admin-items/:id'>
            <Visible roles={1}>
              <ItemCarga/>
            </Visible>
            </Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
            <Route exact path='/signup'>
              <SignUp/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
}


export default App;
