import {axiosService} from "./axios.service";
import {baseURL, urls} from "../configs/Urls";

const userService = {
    getAllComments:() => axiosService.get(urls.comments),
    getAllUsers:() => axiosService.get(urls.users),
    createNewUser:(user) => axiosService.post(urls.users,user),
    createNewPost:(comment) => axiosService.post(urls.comments,comment)
}


export {
    userService
}