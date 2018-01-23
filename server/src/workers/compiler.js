import fs from 'fs';
import path from 'path';
import page from './page';

export default {
  compile(userUid) {
    //request files from the server
    const pageData = getPagesForUser(userUid);
    let templates = {};
    let tempData = {};
    pageData.forEach(val => {
      if (!templates[val.template]) {
        templates[val.template] = loadTemplate(val.template);
        tempData[val.template] = templates[val.template];
      }
      for (let prop in val.customData) {
        tempData[val.template][prop] = val.customData[prop];
      }
      const finalTemplate = injectDataIntoTemplate(templates[val.template], tempData);
    });
    //do the injection stuff

    //write them locally

    //run webpack

    //spit_back_files'
    return pageData;
  },
};

function loadTemplate(template) {
  const reactComponent = fs.readFileSync('../../data/templates/' + template + '.js', 'utf8');
  return { reactComponent: `class${reactComponent.split('class')[1]}` };
}

function getPagesForUser(uid) {
  return page.getPages(uid);
}

function injectDataIntoTemplate(templateObject, tempData) {
  const root = path.join(__dirname, '../../data/tmp/' + userUid);
  if (fs.existsSync(root)) fs.mkdirSync(root);
  fs.writeFileSync(path.join(root, '/' + val.url + '.js'), `const templateData = ${JSON.stringify(tempData)}\n\n${templateObject.reactComponent}\n\nexport default Admin;`);
  return;
}
