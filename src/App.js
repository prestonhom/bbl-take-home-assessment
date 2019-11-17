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
    }
  }
  addTheItem = item => {
    let items = [...this.state.items]
    items.push(item)
    this.setState({ items });
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
          <Route exact path='/items' render={() =>
            this.state.items.length
              ?
              <div>
                <table>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Photo</th>
                    <th>Quantity</th>
                  </tr>
                  
                  {this.state.items.map(s => {
                    return (
                      <tr key={s._id}>
                        
                          <td>{s.title}</td>
                          <td>{s.description}</td>
                          <td>{s.photo}</td>
                          <td>{s.quantity}</td>
                        
                      </tr>
                    )
                  })}
                  
                </table>
              </div>
              :
              <div>
                <h1>loading</h1>
              </div>

          }
          />
          <Route exact path='/items/add' render={props=>
            <ItemForm
              {...props}
              addTheItem={this.addTheItem}
            />
          } />
        </Switch>
      </div>
    )

  }
}
export default App;
