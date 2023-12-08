import { LogDatasource } from "../../domain/datasource/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";

export class LogRepositoryImpl implements LogRepository {

    constructor(
        private readonly logDatasource: LogDatasource,
    ) {}

    async saveLog(log: LogEntity): Promise<void> {
        this.logDatasource.saveLog(log);
    }
    async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDatasource.getLog(severityLevel);
    }
}