import axios from 'axios'

export const clientAxios = axios.create({
    baseURL: "https://api.siclo.com/api/v2/plus"
})
