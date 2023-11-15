import axios from 'axios';

export const httpClientPLugin = {
    get: async(url: string) => {
        //? usando fetch
        // const resp = await fetch(url);
        // return await resp.json();

        //? usando axios
        const {data} = await axios.get(url);
        console.log(data);
        return data;
    },

    post: async(url:string, body: any) => {},
    put: async(url:string, body: any) => {},
    delete: async(url:string) => {},
};

