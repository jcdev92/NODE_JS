import { CreateTable } from "../domain/uses-cases/create-table.use-cases";
import { SaveFile } from "../domain/uses-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
};

export class ServerApp {
    static run({ base, limit, showTable, name, destination }: RunOptions) {
        console.log('Server running...');

        const table = new CreateTable().execute({ base, limit });

        const wasCreated = new SaveFile().execute({
            fileContent: table,
            fileDestination: `${destination}/${name}-${base}`,
            fileName: name
        });

        if (showTable) console.log(table);

        (wasCreated)
            ? console.log('File created!')
            : console.error('File not created')
    };
};