const REGISTER_SUCCESS = 'REGISTER_SUCCESS'


const initState = {
    name: '',
    pwd: ''
}
//reducer
export default function user(state = initState, action) {
    switch (action.type) {
    case REGISTER_SUCCESS:
        return {
            name: action.data.userName,
            pwd: action.data.password
        }
    default:
        return state

    }
}
