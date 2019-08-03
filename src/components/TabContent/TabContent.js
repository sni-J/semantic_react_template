import React, { Component } from 'react'
import {
  Card,
  Divider,
  Tab,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class TabContent extends Component {
  render(){
    const { activeItem } = this.props

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
          <Tab.Pane>
            <p>Message Here</p>
          </Tab.Pane>
        )
      case 'friends':
        return (<p>friends Here</p>)
      default:
        return (<p>Not Found, But Not 404. Maybe under construction.</p>)
    }
  }
}
