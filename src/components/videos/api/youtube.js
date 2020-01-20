import axios from 'axios';

const KEY = 'AIzaSyALQnLg_Tw-vrmo1knZfdkso6j84wgoOho';
console.log("Entering youtube file:----------------------------------->");

const config = {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
}

console.log("youtube config:----------------------------------->" + JSON.stringify(config));

console.log("youtube axios:----------------------------------->" + JSON.stringify(axios));


export default axios.create(config);


