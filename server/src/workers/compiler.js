import fs from 'fs';
import path from 'path';

export default {
  compile(userUid) {
    //request files from the server
    const pageData = getPagesForUser(userUid);

    //do the injection stuff

    //write them locally

    //run webpack

    //spit_back_files'
    return pageData;
  },
};

function getPagesForUser(uid) {
  return databaseDAO.getPagesForUser(uid);
}

const databaseDAO = {
  getPagesForUser(uid) {},
};
