const { lightBlueArg, yellowArg } = require('../config/chalk.config');

module.exports = (base, limit) => {
  let data = '',
    dataShow = '';
  for (let i = 0; i <= limit; i++) {
    const result = base * i;
    data += `${base} x ${i} = ${result}\n`;
    dataShow += `${lightBlueArg(base)} x ${yellowArg(i)} = ${lightBlueArg(
      result
    )}\n`;
  }
  return {
    data,
    dataShow,
  };
};
