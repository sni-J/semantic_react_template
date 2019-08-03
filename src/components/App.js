import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import Navbar from './Navbar/Navbar.js'
import TabContent from './TabContent/TabContent.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.state = {
      activeItem: 'home',
      color: 'teal',
      login: 'login'
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar handleItemClick={this.handleItemClick} {...this.state}>
          </Navbar>
        </div>
        <div className="App-body">
          <Container>
            <TabContent {...this.state}>
            </TabContent>
          </Container>
        </div>
      </div>
    )
  }
}
