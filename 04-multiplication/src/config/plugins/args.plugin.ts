import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication Table Base'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication Table Limit'
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show Multiplication Table'
})
.option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'File name'
})
.option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
})

.check((argv, options) => {
    if (argv.b < 1) throw 'base must be greater than 0';
    if (isNaN(argv.b)) throw 'base must be a number';
    if (argv.b > argv.l) throw `You have reached the limit ${argv.l}`;
    return true;
})
    .parseSync();