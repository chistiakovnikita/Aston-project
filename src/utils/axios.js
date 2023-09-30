import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://auto-news-5a3ae.web.app',
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instance
