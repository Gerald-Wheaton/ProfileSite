import React from "react"
import AboutMe from "./webPages/AboutMe"
import ContactMe from "./webPages/ContactMe"
import LandingPage from "./webPages/LandingPage"
import MyGithub from "./webPages/MyGithub"
import Resume from "./webPages/Resume"
import { Switch, Route } from "react-router-dom"

function PagesRoutes() {
    return(
        <Switch>
            <Route path="/landing" component={LandingPage} />

            <Route path="/about" component={AboutMe} />

            <Route path="/resume" component={Resume} />

            <Route path="/git" component={MyGithub} />

            <Route path="/contact" component={ContactMe} />
        </Switch>   
    )
}

export default PagesRoutes