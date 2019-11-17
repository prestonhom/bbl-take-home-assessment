import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {createItem} from '../utils/itemsService'

class ItemForm extends Component{
    state ={
        title:'',
        description: '',
        photo: '',
        quantity: ''
    }
    handleFormChanges = async (evt) =>{
        this.setState({
        [evt.target.name]: evt.target.value
        })
      }  
      handleFormSubmit = async (evt) =>{
        const review = await createItem({...this.state });
        this.props.addItem(item)
      }

    render(){
        return(
            <div>
                <h1>Add a new item to that list</h1>

            </div>
        )
    }
}
