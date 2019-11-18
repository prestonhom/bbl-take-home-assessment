import React, { Component } from 'react';
import { addItem } from '../utils/itemsService'

class ItemForm extends Component {
    state = {
        title: '',
        description: '',
        imgUrl: '',
        quantity: '',

    }
    // makes changes to the state by name
    handleFormChanges = async (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    // submits the form 
    handleFormSubmit = async (evt) => {
        const inputs = {
            title: this.state.title,
            description: this.state.description,
            photo: this.state.imgUrl,
            quantity: this.state.quantity
        }
        const item = await addItem(inputs);
        this.props.addTheItem(item)
        this.props.history.push('/items')
    }
    // uploads image using cloudinary as hosting service
    uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'itemsappimages')
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/aboveandphom/image/upload', {
            method: 'POST',
            body: data
        }
        )
        const file = await res.json()
        this.setState({ imgUrl: file.secure_url })
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}> Add an item</h1>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <form
                        style={{
                            color: 'red'
                        }}
                        onSubmit={evt => { this.handleFormSubmit(evt.preventDefault()) }}
                    >
                        <div className='title-data'>
                            <input
                                type='text'
                                placeholder='Enter the title of item'
                                style={{
                                    width: '40rem',
                                    height: '3rem'
                                }}
                                name='title'
                                required='true'
                                onChange={this.handleFormChanges}

                            />
                        </div>
                        <div className='description-data'>
                            <input
                                type='text'
                                placeholder='Enter description'
                                style={{
                                    width: '40rem',
                                    height: '3rem'
                                }}
                                name='description'
                                required='true'
                                onChange={this.handleFormChanges}

                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                placeholder='Enter quantity'
                                style={{
                                    width: '40rem',
                                    height: '3rem'
                                }}
                                name='quantity'
                                required='true'
                                onChange={this.handleFormChanges}

                            />
                        </div>
                        <div>
                            Please upload photo of the item
                            <input
                                type='file'
                                placeholder='Upload an image'
                                name='file'
                                onChange={this.uploadImage}
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
            </div>
        )
    }
}

export default ItemForm;