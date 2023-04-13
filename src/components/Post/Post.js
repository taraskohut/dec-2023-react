import React from 'react';

const Post = ({value,lift}) => {
    return (
        <div>
            <div>
                <p>ID: {value.id}</p>
                <p>Title: {value.title}</p>
                <button onClick={()=>{lift(value)}}>details</button>
            </div>
        </div>
    );
};

export default Post;