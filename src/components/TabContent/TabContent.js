import React, { Component } from 'react'
import {
  Container
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class HomeContent extends Component {
  render(){
    return (
      <Container fluid>
        <p>Home Content</p>
      </Container>
    )
  }
}

export default class TabContent extends Component {
  components = {
      'home': HomeContent
  }

  render(){
    const { activeItem } = this.props
    const TagName = this.components[activeItem]

    if(TagName){
      return (
        <TagName />
      )
    }
    else{
      return (
        <p>Not Found, But Not 404. Maybe under construction.</p>
      )
    }
  }
}
