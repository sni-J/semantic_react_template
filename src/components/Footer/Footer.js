import React, { Component } from 'react'
import {
  Menu,
  Container,
  Responsive,
} from 'semantic-ui-react'
import logo from '../logo.svg'
import 'semantic-ui-css/semantic.min.css'
import './Footer.css'

const footerItem = ['Github']
const footerLink = {'Github':'https://github.com/sni-J/semantic_react_test'}

export default class Footer extends Component {
  state = {
  }

  render(){
    return (
      <Container className='footerContainer'>
        <Responsive
          {...Responsive.onlyMobile}
          as={Menu}
          secondary
          className='footer'
        >
          <Menu.Menu position='left'>
            <Menu.Item>
              <img src={logo} alt="logo"/>
            </Menu.Item>
          </Menu.Menu>
        </Responsive>
        <Container className='footerItem'>
          <Menu secondary stackable className='footer'>
            <Responsive
              minWidth={Responsive.onlyTablet.minWidth}
              as={Menu.Menu}
              position="left"
            >
              <Menu.Item>
                <img src={logo} alt="logo"/>
              </Menu.Item>
            </Responsive>
            <Menu.Menu position='left'>
            {
              footerItem.map(item => {
                return (
                  <Menu.Item
                    key={"footer_"+item}
                    name={item}
                    as='a'
                    href={footerLink[item]}
                  />
                )
              })
            }
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Menu.Item as='p'>
                Template made by &nbsp;<a href="https://github.com/sni-J">sni/J</a>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
      </Container>
    )
  }
}
