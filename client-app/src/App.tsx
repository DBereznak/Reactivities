import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';



class App extends Component {
  state = {
    values: []
  }
componentDidMount() {
  axios.get('https://localhost:44389/api/values')
  .then(( response) => {
    console.log(response);
    this.setState({
      values: response.data
    })
  })

}

  render() {
    return (
<div className="App">
<Header as='h2'>
    <Icon name='user' />
    <Header.Content>Reactivities</Header.Content>
    <List>
    {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
        ))}
  </List>
  </Header>
    </div>
    )
}
}


export default App;
