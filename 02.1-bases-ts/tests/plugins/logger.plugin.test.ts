import { buildLogger, logger as winstonLogger } from "../../src/plugins/logger.plugin";

describe('../../src/plugins/logger.plugin', () => {

    test('buildLogger shoul return a function logger', () => {

        const logger = buildLogger('test');

        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });

    test('buildLogger shoul return a function logger', () => {

        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test services';

        const logger = buildLogger(service)
        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level: 'info',
                message,
                service
            })
        )
    });


});