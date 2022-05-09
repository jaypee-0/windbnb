import React from "react";
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav'
import Rooms from "./Components/Rooms";
import Room from "./Components/Room";
import Error from "./Components/Error";

function App() {
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Rooms />}></Route>
        <Route exact path="/name" element={<Room />}></Route>
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
