interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
};

export class ServerApp {
    static run(options: RunOptions) {
        console.log('Server is running');
        console.log({options});
    };
};