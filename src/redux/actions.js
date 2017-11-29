import axios from 'axios'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

function _user(data) {
    return {
        type: REGISTER_SUCCESS,
        data
    }
}

export default function user(data) {
    return dispatch => {
        dispatch(_user(data))
    }
}