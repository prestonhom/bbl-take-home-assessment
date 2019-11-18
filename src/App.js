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
      items: [],
      selectAll: false,
      checked: []
    }
  }
  // helper function to update the /items route after post request so that the newly 
  // submitted item is rendered by the time he user gets redirected
  addTheItem = item => {
    let items = [...this.state.items]
    items.push(item)
    this.setState({ items });
  }
  // when the component is first rendered the original state for selecting all is set to false, this changes all to checked
  handleChange = () => {
    var selectAll = !this.state.selectAll;
    this.setState({ selectAll: selectAll });
    var checkedCopy = [];
    this.state.items.forEach(function (e, idx) {
      checkedCopy.push(selectAll);
    });
    this.setState({
      checked: checkedCopy
    });
  };

  // changes a single checkbox
  handleSingleCheckboxChange = index => {
    var checkedCopy = this.state.checked;
    checkedCopy[index] = !this.state.checked[index];
    if (checkedCopy[index] === false) {
      this.setState({ selectAll: false });
    }
    this.setState({
      checked: checkedCopy
    });
  };

  // makes the API call from the itemsservice file
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
                    <th>
                      <input
                        type="checkbox"
                        onChange={this.handleChange}
                        checked={this.state.selectAll}
                      />
                      <span style={{fontSize:'10px'}}>SelectAll/UnSelectAll</span>
                    </th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Photo</th>
                    <th>Quantity</th>
                  </tr>
                  {this.state.items.map((s, idx) => {
                    return (
                      <tr className='table-data' key={idx}  style={{ textAlign: 'center' }}>
                        <td>
                          <input
                            type="checkbox"
                            defaultChecked={this.state.checked[idx]}
                            checked={this.state.checked[idx]}
                            onChange={() => this.handleSingleCheckboxChange(idx)}
                          />
                        </td>
                        <td>{s.title}</td>
                        <td>{s.description}</td>
                        <td><img src={`${s.photo}`} style={{width:'40px', height:'40px'}}/></td>
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
          <Route exact path='/items/add' render={props =>
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
