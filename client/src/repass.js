import axios from 'axios';
axios.defaults.withCredentials = true;

const repass= axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
    headers: { crossDomain: true, 'Content-Type': 'application/json' },
})
repass.defaults.withCredentials = true

export default repass;