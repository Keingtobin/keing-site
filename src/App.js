import React, { Component } from 'react';
import { Education } from "./components/Education";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Projects } from "./components/Projects";
import { Home } from "./components/newHome";
import { Chatbot } from "./components/Chatbot";



class App extends Component {
  render() {
    return (
      <div class="App container-fluid wrapper">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/chatbot" element={<Chatbot />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
