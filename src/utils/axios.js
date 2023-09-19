import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://server-bet9.vercel.app',
})

export default instance
