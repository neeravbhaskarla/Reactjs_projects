import axios from 'axios'

const instance = axios.create({
    baseURL:'https://my-react-burger-be384-default-rtdb.firebaseio.com/'
})
export default instance