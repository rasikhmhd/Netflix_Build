import React from "react";
import NavBar from "./compents/NavBar/NavBar";
import {action,originals,romance} from './urls'
import "./App.css"
import Banner from "./compents/Banner/Banner";
import RowPost from "./compents/RowPost/RowPost";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
    </div>
  );
}

export default App;
