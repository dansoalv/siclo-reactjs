import {
    GET_INSTRUCTORS,
    GET_INSTRUCTORS_FAIL,
    GET_INSTRUCTORS_SUCCESS
} from  '../Types/index.js'

const initialState = {
    instructors: [],
    totalPages: [] ,
    error: null,
    loading: false
}

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_INSTRUCTORS:
            return {...state, loading: action.payload}
        case GET_INSTRUCTORS_SUCCESS:
            return {...state, loading: false, error: false, instructors: action.payload, totalPages: action.totalPages}
        case GET_INSTRUCTORS_FAIL:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
