import React from "react"
import { Layout, Drawer, Navigation, Content } from "react-mdl"
import { Link } from "react-router-dom"

function SideBar() {
    return (
        <div className="side-bar">
            <Layout fixedDrawer>
                <Drawer title="Landing Page">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Me</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/git">Github</Link>
                        <Link to="/contact">Contact Me</Link>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
        </div>
    )
}

export default SideBar