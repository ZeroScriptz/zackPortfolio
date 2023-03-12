import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CustomNavbar from './components/navBar';
import Home from './components/home';
import Projects from './components/projects';
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route exact path="" element={<Home />}  />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;