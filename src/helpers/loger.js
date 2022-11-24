const { error, success, warning } = require('../config/chalk.config');

const log = (message) => console.log(message);
log.clear = () => console.clear();
log.error = (message) => console.log(error(message));
log.success = (message) => console.log(success(message));
log.warning = (message) => console.log(warning(message));

module.exports = log;
