import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import HatsPage from './pages/HatsPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <div>
     <Switch>
      <Route path="/shop">
        <ShopPage />
      </Route>

      <Route path="/">
        <Homepage />
      </Route>

     </Switch>
    </div>
  );
}

export default App;
