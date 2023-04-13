import React, {useEffect, useState} from 'react';
import Launche from "./Launche";
const Launches = () => {
    let [launches, setLaunches] = useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(allLaunches =>{
                setLaunches(allLaunches)
            })
    },[])
    return (
        <div>
            {

                launches.map(value => <Launche value={value} key={value.index}/>)
            }
        </div>
    );
};

export default Launches;