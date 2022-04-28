import axios from "axios"

const createNewUser = async (data) => {
    const url = 'https://users-crud1.herokuapp.com/users/'
    const req = await axios.post(url, data)
    return req
}

export default createNewUser