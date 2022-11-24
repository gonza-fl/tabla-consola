const fs = require('fs');
const dataMaker = require('./dataMaker');
const makeDecorator = require('./decorators');
const log = require('./loger');

const createFile = async (base, show, limit) => {
  const dir = './output'
  if (!fs.existsSync(dir)){
    log.warning('Output directory not exists...\nCreated successfully\n')
    fs.mkdirSync(dir);
}
  const fileName = `${dir}/tableInBase-${base}.txt`;
  try {
    const {data, dataShow} = dataMaker(base, limit);
    const decoration = makeDecorator(base);
    fs.writeFileSync(fileName, data);
    if (show) {
      log(`${decoration}${dataShow}`);
    }
    return fileName;
  } catch (error) {
    throw error;
  }
};

module.exports = { createFile };
