import {
    GET_INSTRUCTORS,
    GET_INSTRUCTORS_FAIL,
    GET_INSTRUCTORS_SUCCESS
} from  '../Types/index.js'
import {clientAxios} from "../Config/axios";


export function getInstructorsList(page, size) {
    return async (dispatch) => {
        dispatch(getInstructorsAction())
        try{
            let totalPages = []
            const response = await clientAxios.get(`/instructors/?page=${page}&page_size=${size}`)
            for (let i = 1; i <= response.data.data.total_pages ; i++) {
                totalPages.push(i)
            }
            dispatch(getInstructorsSuccess(response.data.data.results, totalPages))
        }catch (e) {
            console.log(e)
            dispatch(getInstructorsFail())
        }
    }
}

const getInstructorsAction = () => ({
    type: GET_INSTRUCTORS,
    payload: true
})

const getInstructorsSuccess = (Instructors, totalPages) => ({
    type: GET_INSTRUCTORS_SUCCESS,
    payload: Instructors,
    totalPages: totalPages
})

const getInstructorsFail = (state) => ({
    type: GET_INSTRUCTORS_FAIL,
    payload: state
})
