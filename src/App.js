import './App.css';

// import React from 'react';
import {Comments} from "./components/Coments/Comments";
import {Users} from "./components/Users/Users";

const App = () => {
    return (
        <div className={'container'}>
             <div className={'left'}>
                 <Users/>
             </div>
             <div className={'right'}>
                 <Comments/>
             </div>
        </div>
    );
};

export default App;