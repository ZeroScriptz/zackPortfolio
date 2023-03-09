import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CustomNavbar from './components/navBar';
import Home from './components/home';
import Projects from './components/projects';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route exact path="" element={<Home />}  />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;