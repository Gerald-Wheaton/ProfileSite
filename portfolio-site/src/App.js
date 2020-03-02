import React, { Component } from 'react'
import Nav from "./Components/Nav"
import PagesRoutes from "./Components/PagesRoutes"
import { 
  Layout, 
  Header, 
  Navigation, 
  Content, 
  Drawer } from 'react-mdl'
import "./App.css"

//import { Header, Footer } from 'react-mdl'


class App extends Component {
  render() {
    return (
      <div className="main">
        <Layout>
          <Header title="Hi I'm Gerald" className="header">
            <Drawer>
              <Navigation >
                <Nav />
              </Navigation>
            </Drawer>
          </Header>
          <Drawer title="Let Me Introduce Myself">
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