const yargs = require('./config/yargs.config');
const { createFile } = require('./helpers/multiply');
const log = require('./helpers/loger');
log.clear()
const { b, s, l } = yargs.argv;
createFile(b, s, l)
  .then((fileName) => log.success(`${fileName} created\n`))
  .catch((err) => log.error(err));
