import { CreateTable } from "../domain/uses-cases/create-table.use-cases";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
};

export class ServerApp {
    static run({base, limit, showTable}: RunOptions) {
        console.log('Server is running');
        
        const table = new CreateTable().execute({base, limit})
        if (showTable) console.log(table)
    };
};