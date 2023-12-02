import { ServerApp } from './server-app'

describe('server app', () => {
    test('should create ServerApp instance', () => {
        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
    });
});