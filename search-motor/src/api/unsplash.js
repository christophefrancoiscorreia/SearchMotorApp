import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kfGvXBMf4uzXZQnOuAf0XzAe7VZnFPxePdEh_xD9TJQ'
    },
});