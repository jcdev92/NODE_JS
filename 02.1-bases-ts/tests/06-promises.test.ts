import { getPokemonById } from "../src/js-foundation/06.5-promises";

describe('../src/js-foundation/06.5-promises', () => {

    test('getPokemonById should return a Pokemon', async () => {
        const pokemonId = 4;
        const pokeName = await getPokemonById(pokemonId);

        expect(pokeName).toBe('charmander')
    });

    test('should return an error if Pokemon does not exist', async () => {
        const pokemonId = 400000000;
        try {
            await getPokemonById(pokemonId);
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Pokemon with id: ${pokemonId} does not xist`);
            
        }
    });

});