import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getItems } from './utils/itemsService'

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    const items = await getItems();
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div>
        'hello'
      </div>
    )

  }
}
export default App;
