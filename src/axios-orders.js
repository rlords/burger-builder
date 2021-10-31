import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-e567c.firebaseio.com/'
})

export default instance