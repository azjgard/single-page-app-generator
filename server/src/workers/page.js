import fs from 'fs';
import path from 'path';

export default {
  addPage(uid, pageData) {
    const pathToUser = path.join(__dirname, '..', '..', 'data', 'user', uid + '.json');
    if (fs.existsSync(pathToUser)) {
      const userData = JSON.parse(fs.readFileSync(pathToUser));
      console.log(userData);
      userData.push(pageData);
      fs.writeFileSync(pathToUser, JSON.stringify(userData));
    } else {
      fs.writeFileSync(pathToUser, JSON.stringify([pageData]));
    }
  },
  getPages(uid) {
    const pathToUser = path.join(__dirname, '..', '..', 'data', 'user', uid + '.json');
    if (fs.existsSync(pathToUser)) {
      return JSON.parse(fs.readFileSync(pathToUser));
    } else {
      return {};
    }
  },
};
