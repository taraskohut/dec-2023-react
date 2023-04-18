// import React from 'react';

const Comment = ({comment}) => {
    const {id,name} = comment;
    return (
        <div className={'comment_item'}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
        </div>
    );
};

export {Comment};