import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/ox0d/mockDatabase',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents: function() {
        return apiClient.get('/events')
    }
}