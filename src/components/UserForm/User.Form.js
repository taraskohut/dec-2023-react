import React from 'react';
import {useForm} from "react-hook-form";
import {required} from "joi";
import {userService} from "../../services/user.services";

const UserForm = () => {
    const {register,handleSubmit,reset,formState:{errors,isValid}} = useForm()

    const save = async (user) => {
        const {data} = await userService.createNewUser(user);
        console.log(data);

    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name',)}/>
                <input type="text" placeholder={'email'} {...register('email', {pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/},)}/>
                {errors.email&&
                    <span>
                        <ul>
                            <li>Uppercase (A-Z) and lowercase (a-z) English letters.</li>
                            <li>Digits (0-9).</li>
                            <li>Characters ! # $ % & ' * + - / = ? ^ _ ` / |  ~</li>
                            <li>Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.</li>
                        </ul>
                    </span>}
                <button>Save</button>
            </form>
        </div>
    );
};

export {UserForm}