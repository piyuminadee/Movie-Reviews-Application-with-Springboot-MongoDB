import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080',  // Ensure no extra spaces in the URL
    headers: {
        'Content-Type': 'application/json',
    },
   
});