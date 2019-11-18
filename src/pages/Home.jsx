import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div style={{ margin: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '50%', textAlign: 'center' }}>
                <h1>Home Page</h1>
                <button ><Link to='/items'>See All Items</Link></button>
                <button ><Link to='/items/add'> Add an Item</Link></button>
            </div>
        </div>
    )
}

export default Home;