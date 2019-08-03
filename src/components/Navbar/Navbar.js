import React, { Component } from 'react'
import {
  Input,
  Menu,
  Container,
  Responsive,
  Icon,
  Checkbox,
} from 'semantic-ui-react'
import logo from '../logo.svg'
import 'semantic-ui-css/semantic.min.css'

const menuItem = ['home', 'messages', 'friends']

export default class Navbar extends Component {
  state = {
    visible: window.innerWidth >= Responsive.onlyTablet.minWidth
  }

  handleItemClick = (e, {name}) => {
    this.setState(()=>({activeItem: name}))
    this.props.handleItemClick(e, {name})
  }

  mobileMenuSwitch = (e) => {
    this.setState(state => ({ visible: !state.visible }))
  }

  render(){

    const { visible } = this.state
    const { activeItem, color, login } = this.props

    return (
      <Container>
        <Responsive
          {...Responsive.onlyMobile}
          as={Menu}
          secondary
          inverted
          className='navbar'
        >
          <Menu.Menu position="left">
            <Menu.Item
              as='a'
              header
              href=""
            >
              <img src={logo} alt="logo"/>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item header>
              <Checkbox
                label={
                  <div className='menuIconDiv'>
                  <Icon
                    name='bars'
                    onClick={this.mobileMenuSwitch}
                    fitted
                    size='large'
                    className={
                      'menuIcon' +
                      ((!visible && ' visible') || '')
                    }
                  />
                  <Icon
                    name='x'
                    onClick={this.mobileMenuSwitch}
                    fitted
                    size='large'
                    className={
                      'menuIcon' +
                      ((visible && ' visible') || '')
                    }
                  />
                  </div>
                }
              />
            </Menu.Item>
          </Menu.Menu>
        </Responsive>
        <div className={
          'navItem'+((visible && ' mobile_open')||'')
        }>
          <Menu secondary inverted stackable>
            <Responsive
              minWidth={Responsive.onlyTablet.minWidth}
              as={Menu.Menu}
              position="left"
            >
              <Menu.Item
                as='a'
                header
                href=""
              >
                <img src={logo} alt="logo"/>
              </Menu.Item>
            </Responsive>
            <Menu.Menu position="left">
              {
                menuItem.map(menu => {
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
        </div>
      </Container>
    )
  }
}
