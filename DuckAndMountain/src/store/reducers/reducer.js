const reducer = (state={login: 'offlogin', name: ''}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                login: action.login,
                name: action.name,
            }
        default:
            return state
    }
  };

  export default reducer
