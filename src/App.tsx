import React from 'react';
import {Rating} from './components/Rating';
import {Users} from './components/Users';
import './App.css';

function App() {
    return (
        <div>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Users/>
        </div>
    );
}

export default App;
