import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FileSystemDatasource } from "../infrastructure/datasources/file-sistem.datasource";

const logRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);

export class Server {
    public static start() {
        console.log("Server started...");
        const url = 'http://localhost:3000/posts';
        CronService.createJob(
            "*/5 * * * * *",
            () => {
                new CheckService(
                    logRepository,
                    () => console.log(`${url} - is ok`),
                    (error) => console.log(error)
                ).execute(url)
            }
        );
    };


};