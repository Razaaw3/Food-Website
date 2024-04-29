import axios from "axios"




export const baseURl = 'http://localhost:3000/api'


export const axiosRequest = axios.create({
    baseURL : baseURl,
    timeout : 15000,
    headers : {
        'Content-Type' : 'application/json'
    },
    // transformResponse : (da) =>
})