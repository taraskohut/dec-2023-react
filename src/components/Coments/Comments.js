import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.services";
import {Comment}from "../Coment/Comment";

const Comments = () => {
    const[comments, setComments] = useState([]);
    useEffect(()=>{
            userService.getAllComments().then(value => value.data).then(value => setComments(value))
    },
        [])
    return (
       <div>
           {comments.map(comment =><Comment key={comment.id} comment={comment}/>)}
       </div>
    );
};

export {Comments}