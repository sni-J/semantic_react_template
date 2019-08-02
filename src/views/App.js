import React, { Component } from 'react'
import {
  Input,
  Menu,
  Container,
  Card,
  Divider,
  Tab,
} from 'semantic-ui-react'
import logo from './logo.svg'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

const leftMenu = ['home', 'messages', 'friends']

export default class App extends Component {
  state = {
    activeItem: 'home',
    color: "teal",
    login: "logout"
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem, color, login } = this.state
    const NavBarMenu = () => (
      <Menu secondary inverted>
        <Menu.Menu position="left">
          <Menu.Item
            as='a'
            header
            href=""
          >
            <img src={logo} alt="logo"/>
          </Menu.Item>
          {
            leftMenu.map(menu => {
              return (
                <Menu.Item
                  key={"navbar_"+menu}
                  name={menu}
                  active={activeItem === menu}
                  onClick={this.handleItemClick}
                  color={color}
                />
              )
            })
          }
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input inverted transparent icon="search" placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name={login}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )

    const TabContent = () => {
      switch (activeItem) {
        case 'home':
          return (
            <Card.Group>
              <Card>
                <Card.Content>
                  <Card.Header>Home</Card.Header>
                  <Card.Meta>Meta</Card.Meta>
                  <Divider />
                  <Card.Description>
                    <p>Okay, This is Home</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  Extra Area <br/>
                  Nicely divided
                </Card.Content>
              </Card>
              <Card
                header="Home"
                meta="Meta"
                description="Okay, This is home"
                extra="Extra Area Nicely Divided"
              />
            </Card.Group>
          )
        case 'messages':
          return (
            <Tab.Pane fluid>
              <p>Message Here</p>
            </Tab.Pane>
          )
        case 'friends':
          return (<p>friends Here</p>)
        default:
          return (<p>Not Found, But Not 404. Maybe under construction.</p>)
      }
    }

    return (
      <div className="App">
        <div className="App-header">
          <Container>
            <NavBarMenu>
            </NavBarMenu>
          </Container>
        </div>
        <div className="App-body">
          <Container fluid>
            <Container>
              <TabContent>
              </TabContent>
            </Container>
          </Container>
        </div>
      </div>
    )
  }
}
