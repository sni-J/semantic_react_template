import React, { Component } from 'react'
import {
  Input,
  Menu,
  Container,
  Responsive,
  Icon,
  Checkbox,
  Divider,
} from 'semantic-ui-react'
import logo from '../logo.svg'
import 'semantic-ui-css/semantic.min.css'
import './Navbar.css'

const menuItem = ['home', 'messages', 'friends']

export default class Navbar extends Component {
  state = {
    visible: window.innerWidth >= Responsive.onlyTablet.minWidth,
    iconRotating: ''
  }

  handleItemClick = (e, {name}) => {
    this.mobileMenuSwitch(e)
    this.props.handleItemClick(e, {name})
  }

  mobileMenuSwitch = (e) => {
    if(window.innerWidth <= Responsive.onlyMobile.maxWidth){
      this.setState(state => ({ visible: !state.visible, iconRotating: ' rotating' }))
      setTimeout(
        () => {this.setState(state => ({iconRotating: ''}))}
      , 500)
    }
  }

  themeSwitch = (e) => {
    this.mobileMenuSwitch(e)
    this.props.themeSwitch(e)
  }

  render(){

    const { visible, iconRotating } = this.state
    const { activeItem, login, dark } = this.props

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
                        ((!visible && ' visible') || '') +
                        iconRotating
                      }
                    />
                    <Icon
                      name='x'
                      onClick={this.mobileMenuSwitch}
                      fitted
                      size='large'
                      className={
                        'menuIcon' +
                        ((visible && ' visible') || '') +
                        iconRotating
                      }
                    />
                  </div>
                }
              />
            </Menu.Item>
          </Menu.Menu>
        </Responsive>
        <Container className={
          'navItem'+((visible && ' mobile_open')||'')
        }>
          <Menu inverted secondary stackable className='navbar'>
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
                    />
                  )
                })
              }
            </Menu.Menu>
            <Responsive
              {...Responsive.onlyMobile}
              as={Divider}
            />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input inverted transparent icon="search" placeholder='Search...' />
              </Menu.Item>
              <Menu.Item
                as='a'
                onClick={this.themeSwitch}
              >
                <Responsive
                  minWidth={Responsive.onlyTablet.minWidth}
                >
                  <Icon
                    name='adjust'
                    fitted
                  />
                </Responsive>
                <Responsive
                  {...Responsive.onlyMobile}
                >
                  <Icon
                    name='adjust'
                  />
                  {
                    visible &&
                    ((dark && 'Dark') || 'Light')
                  }
                </Responsive>
              </Menu.Item>
              <Menu.Item
                name={login}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </Container>
      </Container>
    )
  }
}
