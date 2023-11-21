import { getId } from "./get-id.plugins";

describe('get-id.plugins.ts', () => {
    test('getId() should return a UUID', () => {
        const uuid = getId();

        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe( 36 );
    });

});