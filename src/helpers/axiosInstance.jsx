import axios from "axios";
const  axiosInstance = axios.create({
    baseURL: 'https://cfb3-197-237-114-228.ngrok-free.app/api/',
    headers: {
        'Content-type': 'application/json'
    }
});

export default axiosInstance;