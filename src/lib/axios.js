import axios from 'axios'
// con esto evitamos crear multiples instancias de axios
const api = axios.create({
    baseURL: 'http://localhost:4000'
})
export default api