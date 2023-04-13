import './App.css';
import Posts from "./components/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";
import {useState} from "react";
import Launches from "./components/Launches/Launches";
function App() {
    let [chosenPost, setChosenPost] = useState({})
    const lift = (obj) =>{
        setChosenPost({...obj})
    }


    return (
        <div className={'container'}>
           <div className={'left'}>
               <Posts lift={lift}/>
           </div>
            {
                chosenPost
                &&
                (<div className={'right'}>
                <FullPost value={chosenPost}/>
                </div>)
            }
        <div>
            <Launches/>
        </div>


        </div>

    );

}

export default App;
