import axios from 'axios';

export const httpClientPLugin = {
    get: async(url: string) => {
        //? usando fetch
        // const resp = await fetch(url);
        // return await resp.json();

        //? usando axios
        const {data} = await axios.get(url);
        return data;
    },

    post: async(url:string, body: any) => {
        throw new Error("Nor implemented")
    },
    put: async(url:string, body: any) => {
        throw new Error("Nor implemented")
    },
    delete: async(url:string) => {
        throw new Error("Nor implemented")
    },
};

