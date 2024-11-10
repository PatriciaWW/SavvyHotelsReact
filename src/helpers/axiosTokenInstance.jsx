import axios from "axios";

const token = localStorage.getItem("token")
const AxiosTokenInstance = axios.create({
    baseURL: 'https://cfb3-197-237-114-228.ngrok-free.app/api/',
    headers: {
        'Content-type': 'application/json',
        'Authorization' : `Bearer ${token}`
    }
})
 
export default AxiosTokenInstance;