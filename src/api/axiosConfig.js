import axios from 'axios'

const axiosBase = axios.create({
    baseURL: 'http://localhost:2716/api'
})

export default axiosBase;