import axios from 'axios';
const { URL } = process.env;
axios.defaults.withCredentials = true;

const repass= axios.create({
    baseURL: 'URL',
    withCredentials: true,
    headers: { crossDomain: true, 'Content-Type': 'application/json' },
})
repass.defaults.withCredentials = true

export default repass;
