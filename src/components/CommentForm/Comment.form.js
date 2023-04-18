import {useForm} from "react-hook-form";
import {required} from "joi";
import {userService} from "../../services/user.services";

const CommentForm = () => {
    const {register,handleSubmit,reset,formState:{errors,eisValid}} = useForm()

    const save = async (comment) => {
        const {data} = await userService.createNewPost(comment)
        console.log(data);
    }
}