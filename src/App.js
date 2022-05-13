import React from "react";
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "./Components/Rooms";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Rooms />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
