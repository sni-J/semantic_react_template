import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import Navbar from './Navbar/Navbar.js'
import TabContent from './TabContent/TabContent.js'
import Footer from './Footer/Footer.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.state = {
      activeItem: 'home',
      login: 'login',
      dark: false
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  themeSwitch = (e) => {
    this.setState((prevState) => ({ dark: !prevState.dark }))
  }

  render() {
    const { dark } = this.state

    return (
      <div className={"App" + ((dark && ' dark') || '')}>
        <div className="App-header">
          <Navbar handleItemClick={this.handleItemClick} themeSwitch={this.themeSwitch} {...this.state}>
          </Navbar>
        </div>
        <div className="App-body">
          <TabContent {...this.state}>
          </TabContent>
        </div>
        <div className='App-footer'>
          <Footer>
          </Footer>
        </div>
      </div>
    )
  }
}
