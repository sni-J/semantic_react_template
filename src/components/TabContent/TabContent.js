import React, { Component } from 'react'
import {
  Container,
  Divider,
  Button,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'

class HomeContent extends Component {
  state = {stargazers_count: 'Loading...', forks_count: 'Loading...'}

  getGithubInfo =
    axios.get('https://api.github.com/repos/sni-J/semantic_react_test')
    .then(({data})=>{
      console.log(data.svn_url);
      const {stargazers_count, forks_count, svn_url} = data
      this.setState({...{stargazers_count, forks_count, svn_url}})
    })
    .catch((e) => console.log('getGithubInfo: '+e))

  fetchData = async () => {
    await this.getGithubInfo
  }

  componentDidMount() {
    this.fetchData();
  }

  render(){
    return (
      <Container>
        <h2 id="responsive-template-implemented-with-create-react-app--semantic-react">Responsive Template implemented with <a href="https://github.com/facebook/create-react-app">Create React App</a> + <a href="https://react.semantic-ui.com/">Semantic-react</a></h2>
        <Divider />
        <ul>
          <li>Structure
            <ul>
              <li>
                App
                <ul>
                  <li>Navbar: Responsive menu navigation bar</li>
                  <li>TabContent: Contents changes along the selection of menu</li>
                  <li>Footer: Footer contents Also Responsive</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <Divider />
        <Button icon='github' color='black' as='a' href={this.state.svn_url} content='Visit Github'/>
        <Button icon='star' color='black' label={{as: 'a', color:'black', basic: false, href: this.state.svn_url+'/stargazers', content: this.state.stargazers_count}} />
        <Button icon='fork' color='black' label={{as: 'a', color:'black', basic: false, href: this.state.svn_url+'/network/members', content: this.state.forks_count}} />
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
        <Container>
          <p>Not Found, But Not 404. Maybe under construction.</p>
        </Container>
      )
    }
  }
}
