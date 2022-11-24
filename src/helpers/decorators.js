const { lightBlueArg, white, yellowArg } = require('../config/chalk.config');

module.exports = (base) => {
  let decoration = '';
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) decoration += lightBlueArg('=')
    else decoration += white('=');
  }
  return `${decoration}\n    ${yellowArg('Table of ' + base)}\n${decoration}\n\n`;
};
