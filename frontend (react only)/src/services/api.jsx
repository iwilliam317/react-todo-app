import Axios from 'axios'

const api = Axios.create({ baseURL : 'http://localhost:3003/api'})

export default api