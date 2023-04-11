import {rickAndMorty} from "../../App";
import User from "../user/User";
const Users = ({pro: rickAndMorty}) => {

    return (
        <div>
            {
                rickAndMorty.map((value, index)=>(<User item={value} key={index}/>))
            }
        </div>
    );
};

export default Users;