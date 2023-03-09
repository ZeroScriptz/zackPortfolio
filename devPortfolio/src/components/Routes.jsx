import React from "react";
import { BrowserRouter, Route, Switch as RouterSwitch } from 'react-router-dom';
import Home from "../components/homePage";
import Projects from "../components/projects";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RouterSwitch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </RouterSwitch>
    </BrowserRouter>
  );
};

export default MainRoutes;
