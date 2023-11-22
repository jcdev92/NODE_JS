import { getId } from "../../src/plugins/get-id.plugins";

describe('../../src/plugins/get-id.plugins', () => {
    test('getId() should return a UUID', () => {
        const uuid = getId();

        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe( 36 );
    });

});