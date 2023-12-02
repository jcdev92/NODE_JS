import fs from 'fs';
import { SaveFile } from './save-file.use-case'

describe('SaveFileUseCase', () => {

    const options = {
        fileContent: 'custom-content',
        fileDestination: 'custom-outputs',
        fileName: 'custom-file-name'
    };

    const filePath = `${options.fileDestination}/${options.fileName}.txt`;



    afterEach(() => {

        const outputsFolderPath = fs.existsSync('outputs');
        if (outputsFolderPath) fs.rmSync('outputs', { recursive: true });

        const customOutputsPath = fs.existsSync(filePath);
        if (customOutputsPath) fs.rmSync('custom-outputs', { recursive: true });
    });

    test('should save file with default values', () => {
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'test content',
        };

        const result = saveFile.execute(options);
        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf8');

        expect(result).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });

    test('should save file with default values', () => {
        const saveFile = new SaveFile();

        const result = saveFile.execute(options);
        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf8');

        expect(result).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });
});