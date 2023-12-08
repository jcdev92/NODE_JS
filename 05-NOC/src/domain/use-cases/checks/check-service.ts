import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>
};

type SeuccesCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly succesCallback: SeuccesCallback,
        private readonly errorCallback: ErrorCallback
    ) { };

    async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Service ${url} is not available`);
            };
            const log = new LogEntity(`Service ${url} working`, LogSeverityLevel.low)
            this.logRepository.saveLog(log);
            this.succesCallback();
            return true;
        }
        catch (error) {
            const errorMessage = `${url} is not ok. ${error}`;
            const log = new LogEntity(errorMessage, LogSeverityLevel.high);
            this.logRepository.saveLog(log);
            this.errorCallback(errorMessage);
            return false;
        }
    }
}