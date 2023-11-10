const axios = require('axios');

const httpClientPLugin = {
    get: async(url) => {
        //? usando fetch
        // const resp = await fetch(url);
        // return await resp.json();

        //? usando axios
        const {data} = await axios.get(url);
        console.log(data);
        return data;
    },

    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url, body) => {},
};

module.exports = {
    http: httpClientPLugin,
};