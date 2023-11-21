import { httpClientPLugin } from "./http-client.plugin";

describe('./http-client.plugin.ts', () => {
    test('httpClientPlugin.get() should return a string', async() => {

        const data = await httpClientPLugin.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(data).toEqual(
            {
                "userId": expect.any(Number),
                "id": expect.any(Number),
                "title": expect.any(String),
                "completed": expect.any(Boolean)
            }
        );

    });


    test('httpClientPlugin.get() should have, Post, Put and Delete methods', async() => {

        expect(httpClientPLugin.post);
        expect(httpClientPLugin.put);
        expect(httpClientPLugin.delete);


    });
});