import LOGIN from "../constants/constant";

const userLogin = (manager) => {
    
    return{
        type: LOGIN,
        login: manager.login,
        name: manager.name,
    }
}

export default userLogin