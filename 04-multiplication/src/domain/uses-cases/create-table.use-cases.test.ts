import { CreateTable } from './create-table.use-cases'

describe('CreateTableUseCase', () => {
    test('should create a table with default values', () => {

        const titleLength = 4;
        const createTable = new CreateTable();
        const table = createTable.execute({ base: 2 });
        const rows = table.split('\n').length - titleLength;

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 1 = 2');
        expect(table).toContain('2 x 10 = 20');
        expect(rows).toBe(10);
    });

    test('should create a table with custom values', () => {
        const options = {
            base: 3,
            limit: 20
        }

        const titleLength = 4;
        const createTable = new CreateTable();
        const table = createTable.execute(options);
        const rows = table.split('\n').length - titleLength;
        expect(table).toContain('3 x 1 = 3');
        expect(rows).toBe(options.limit);
    })
});