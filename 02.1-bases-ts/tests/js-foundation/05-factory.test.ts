import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('../../src/js-foundation/05-factory', () => {
    const getId = () => '12345';
    const getAge = () => 35;


    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({getId, getAge})
        expect(typeof makePerson).toBe('function')
    });

    test('buildMakePerson should return a person', () => {
        const makePerson = buildMakePerson({getId, getAge})
        const johnDoe = makePerson({name: 'John Doe', birthdate: '1985-10-21'})
        expect(johnDoe).toEqual({
            id: '12345',
            name: 'John Doe',
            birthdate: '1985-10-21',
            age: 35
        })
    });
})