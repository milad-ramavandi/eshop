import axios from "axios"
import server from "../configuration/constants.json";


export const getMethodAxios = (url) => {
    return axios.get(`${server.SERVER_ADDRESS}${url}`)
}
export const postMethodAxios = (url, content) => {
    return axios.post(`${server.SERVER_ADDRESS}${url}`,content, {headers:{"Content-Type":"application/json"}})
}