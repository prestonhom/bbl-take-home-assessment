import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getItems } from './utils/itemsService';
import { Route, Switch, Link } from 'react-router-dom';
import ItemForm from './pages/ItemForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  addItem = item => {
    let items = [...this.state.items]
    items.push(item)
    this.setState({ items});
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
        <Switch>
          <Route exact path='/items' render={() =>{
           
             {this.state.items.map(i=>{
               return(
                 <div>
                   {i.title}
                 </div>
               )
             })}
            
          }}
          />
          <Route exact path='/add' render={() =>
            <ItemForm 
              addItem={this.addItem}
            />
          } />
        </Switch>
      </div>
    )

  }
}
export default App;
