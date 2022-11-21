import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import './darkMode.css';
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";
import ImageSlider from "./Components/ImageSlider";
import { SliderData } from "./Components/SliderData";
import AboutMe from "./Components/AboutMe";

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light');
    }
    console.log(theme)
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <Nav toggleTheme={toggleTheme}/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/project">
            {/* <Projects /> */}
            <ImageSlider slides={SliderData} />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
