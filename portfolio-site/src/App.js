import React, { Component } from 'react'
import Nav from "./Components/Nav"
import PagesRoutes from "./Components/PagesRoutes"
import { 
  Layout, 
  Navigation, 
  Content, 
  Drawer } from 'react-mdl'
import "./App.css"

//import { Header, Footer } from 'react-mdl'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Layout className="main" style={{background: 'url(https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png) center / cover'}}>

          <Drawer title="Let Me Introduce Myself" className="drawer">
            <Navigation >
                <Nav />
            </Navigation>
          </Drawer>

          <Content>
            <PagesRoutes />
          </Content>
        </Layout>
      </div>
    )

  }
}

export default App;