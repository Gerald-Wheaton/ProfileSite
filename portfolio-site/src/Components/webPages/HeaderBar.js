import React from "react"
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl"
import AboutMe from "./AboutMe"
import Resume from "./Resume"
import Github from "./MyGithub"
import ContactMe from "./ContactMe"

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom"

function HeaderBar() {
    return(
        <Router>
            <div>
                
                <Layout>
                    <Header title="Hi I'm Gerald" scroll/>
                    <Drawer title="Let Me Introduce Myself">
                        <Navigation>
                            <li>
                                <Link to="/about">About Me</Link>
                            </li>

                            <li>
                                <Link to="/resume">Resume</Link>
                            </li>
                            
                            <li>
                                <Link to="/git">Github</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact Me</Link>
                            </li>
                        </Navigation>
                    </Drawer>
                </Layout>

                <Switch>
                    <Route path="/about" component={AboutMe} />

                    <Route path="/resume" component={Resume} />

                    <Route path="/git" component={Github} />

                    <Route path="/contact" component={ContactMe} />

                </Switch>

            </div>
        </Router>
    )
}

export default HeaderBar