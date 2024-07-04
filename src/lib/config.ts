import axios from "axios"




export const baseURl = 'https://clean-plate.vercel.app/api'


export const axiosRequest = axios.create({
    baseURL : baseURl,
    timeout : 15000,
    headers : {
        'Content-Type' : 'application/json'
    },
    // transformResponse : (da) =>
})