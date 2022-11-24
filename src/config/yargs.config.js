module.exports = require('yargs')
  .options({
    b: {
      alias: 'base',
      demandOption: true,
      describe:
        '-b Base number to create a multiplication table',
      type: 'number',
    },
    s: {
      alias: 'show',
      type: 'boolean',
      default: false,
      describe: '-s Show multiplication table result',
    },
    l: {
      alias: 'limit',
      type: 'number',
      default: 10,
      describe: '-l [number] Limit of multiplication table',
    },
  })
  .check((argv) => {
    if (isNaN(argv.b)) throw new Error('La base tiene que ser un número');
    return true;
  });
