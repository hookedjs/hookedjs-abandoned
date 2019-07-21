import * as fs from 'fs';
import * as path from 'path';

import { Logger } from '../src/logger';

export const deleteTempDB = () => {
  const file = path.join(__dirname, '../', 'warthog.sqlite.tmp');
  if (fs.existsSync(file)) {
    Logger.info(`Temp DB deleted: ${file}`);
    fs.unlinkSync(file);
  }
};

export { Logger };
