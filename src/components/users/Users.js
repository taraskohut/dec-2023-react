import {useEffect, useState} from "react";
import {userService} from "../../services/user.services";
import {User} from "../User/User";
import {UserForm} from "../UserForm/User.Form";

const Users = () =>{
    const [users,setUsers] = useState([]);
    const[] = useState(null)
    useEffect(()=>{
        userService.getAllUsers().then(value => value.data).then(value => setUsers(value))
    },
        [])
    return (
        <div>
            <UserForm/>
            <hr/>
            {users.map(user =><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users}