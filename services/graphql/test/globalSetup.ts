import { deleteTempDB } from './testHelpers';

module.exports = async () => {
  // Delete temporary DB after tests have run
  deleteTempDB();
};
