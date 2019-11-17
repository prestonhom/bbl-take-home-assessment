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
  addItem = item => {
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
          <Route exact path='/' render={() => 
            this.state.items.length
              ?
              <div>
                {this.state.items.map(s=>{
                  return(
                    <div> 
                    <h1 style={{fontSize:'100px', color:'red'}}>{s.description}</h1>
                    </div>
                  )
                })}
              </div>
              :
              <div>
                <h1>loading</h1>
              </div>
          
        }
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
