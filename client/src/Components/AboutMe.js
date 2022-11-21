import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutNav from "./AboutMeFolder/AboutNav";
import GrowingUp from "./AboutMeFolder/GrowingUp";
import Hobbies from "./AboutMeFolder/Hobbies";
import Travelling from "./AboutMeFolder/Travelling";

function AboutMe() {
    return(
        <div id="wrapper">
            <div id="first">
                <img className="homepage-image" src="https://media-exp1.licdn.com/dms/image/C4E03AQGET9wQO2tZRQ/profile-displayphoto-shrink_800_800/0/1519247446515?e=1673481600&v=beta&t=Xb-0yDXXk6zSHZRKuVIPoSfatEHS23OcRjlxx1q90fU" alt="Profile Pic"/>
                <h2 className="AboutMeName">Peyton Harrison</h2>
                <h2 className="AboutMeSkills">Skills:</h2>
                <p>1. Knowledgable in React, Ruby, Ruby on Rails, Javascript, and Python</p>
                <p>2. Full stack developer</p>
                <p>3. Experience in time management and creating timelines</p>
                <p>4. Experience in creating and managing budgets</p>
                <h2 className="AboutMeSkills">Education:</h2>
                <p>1. Graduated from Ole Miss with a degree in Civil Engineering</p>
                <p>2. Graduated from Flatiron School, focusing on React and Ruby </p>
                <h2 className="AboutMeSkills">Experience:</h2>
                <p>1. Assistant Project Manager at Yates Construction</p>
                <p>2. Property Restoration Estimator at Belfor</p>
            </div>
            <div id="second">
                <BrowserRouter>
                    <AboutNav />
                    <Switch>
                    <Route exact path="/growingup">
                        <GrowingUp />
                    </Route>
                    <Route path="/hobbies">
                        <Hobbies />
                    </Route>
                    <Route path="/travelling">
                        <Travelling />
                    </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default AboutMe