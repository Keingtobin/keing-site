import { Education } from "./components/Education";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Projects } from "./components/Projects";
import { Home } from "./components/Home";



function App() {
  return (
    <div class="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/education" element={<Education />}/>
      </Routes>
    </div>
  );
}

export default App;
