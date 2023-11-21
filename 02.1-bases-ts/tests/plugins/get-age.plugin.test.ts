import { getAge } from "../../src/plugins/get-age.plugin";

describe('../../src/plugins/get-age.plugin.ts', () => {

    test('getAge() should return the age of the person', () => {

        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');

    });


    test('getAge() should return current age', () => {

        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculatedAge);

    });


    // LOS ESPIAS
    test('getAge() should return 0 year', () => {
        // sobrescribir el metodo con el espia
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        expect(age).toBe(0)
        expect(spy).toHaveBeenCalled();
    })




});

export { getAge };
