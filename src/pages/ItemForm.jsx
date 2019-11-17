import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {addItem} from '../utils/itemsService'

class ItemForm extends Component {
    state = {
        title: '',
        description: '',
        photo: '',
        quantity: ''
    }
    handleFormChanges = async (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleFormSubmit = async (evt) => {
        const item = await addItem({ ...this.state });
        this.props.addTheItem(item)
        this.props.history.push('/items')
    }

    render() {
        return (
            <div>
                <form
                    style={{
                        color: 'red'
                    }}
                    onSubmit={evt => { this.handleFormSubmit(evt.preventDefault()) }}
                >
                    <div>
                        <input
                            type='text'
                            placeholder='tell us about the item'
                            style={{
                                width: '40rem',
                                height: '3rem'
                            }}
                            name='title'
                            onChange={this.handleFormChanges}
                            
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            placeholder='tell us about the item'
                            style={{
                                width: '40rem',
                                height: '3rem'
                            }}
                            name='description'
                            onChange={this.handleFormChanges}
                            
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            placeholder='tell us about the item'
                            style={{
                                width: '40rem',
                                height: '3rem'
                            }}
                            name='photo'
                            onChange={this.handleFormChanges}
                            
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            placeholder='tell us about the item'
                            style={{
                                width: '40rem',
                                height: '3rem'
                            }}
                            name='quantity'
                            onChange={this.handleFormChanges}
                            
                        />
                    </div>
                    <div>
                        <input type="submit"
                            className='submit-button'
                            placeholder='SUBMIT REVIEW'
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default ItemForm;