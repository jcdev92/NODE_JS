import { superHeros } from "../src/js-foundation/02-destructuring";

describe('../src/js-foundation/02-destructuring.ts', () => {
    test('character should contain Flash, Superman', () => {
        expect(superHeros).toContain('Flash');
        expect(superHeros).toContain('Superman');
    });
    test('first character should be Flash, and second Superman', () => {
        const [flash, superman] = superHeros;
        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');
    });
})