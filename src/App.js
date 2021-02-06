// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import LoginComponent from './components/LoginComponent';
import ProductListContainer from './containers/ProductListContainer';
import ErrorComponent from './components/ErrorComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginComponent} exact />
          <Route path="/productlist" component={ProductListContainer} />
          <Route component={ErrorComponent} />
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
