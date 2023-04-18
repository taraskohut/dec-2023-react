import React from 'react';

const User = ({user}) => {
    const {id,email,name} = user;
    return (
        <div className={'user-item'}>
            <div>
                <h3>id: {id}</h3>
                <h3>Name: {name}</h3>
                <h3>Email: {email}</h3>
            </div>
        </div>
    );
};

export {User}