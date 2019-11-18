import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addItem } from '../utils/itemsService'

class ItemForm extends Component {
    state = {
        title: '',
        description: '',
        imgUrl: '',
        quantity: '',

    }

    handleFormChanges = async (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
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
        this.setState({imgUrl:file.secure_url})
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
                            type='file'
                            placeholder='Upload an image'
                            name='file'
                            onChange={this.uploadImage}
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