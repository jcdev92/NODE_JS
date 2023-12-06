interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>
};

type SeuccesCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly succesCallback: SeuccesCallback, 
        private readonly errorCallback: ErrorCallback
        ) { };

    async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Service ${url} is not available`);
            };
            this.succesCallback();
            return true;
        }
        catch (error) {
            this.errorCallback(`${error}`);
            return false;
        }
    }
}