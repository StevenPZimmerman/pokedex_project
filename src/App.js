import React from 'react'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./views/Home"

function App() {
  return (
   <div>

<BrowserRouter>
<Switch>

<Route exact path = "/">
  <Home/>
</Route>


</Switch>


</BrowserRouter>


   </div>
  );
}

export default App;
