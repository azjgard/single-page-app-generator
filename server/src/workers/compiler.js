import fs from 'fs';
import path from 'path';
import page from './page';

export default {
  compile(userUid) {
    //request files from the server
    const pageData = getPagesForUser(userUid);
    let templates = {};
    pageData.forEach(val => {
      if (!templates[val.template]) {
        templates[val.template] = loadTemplate(val.template);
      }
      const templateData = parseTemplateData(templates[val.template]);
      for (let prop in val.customData) {
        templateData[prop] = val.customData[prop];
      }
      const finalTemplate = injectDataIntoTemplate(templates[val.template], JSON.stringify(templateData));
      if (fs.existsSync(path.join(__dirname, '../../data/tmp/' + userUid))) fs.mkdirSync(path.join(__dirname, '../../data/tmp/' + userUid));
      fs.writeFileSync(path.join(__dirname, '../../data/tmp/' + useruid + '/' + val.url + '.js'));
    });
    //do the injection stuff

    //write them locally

    //run webpack

    //spit_back_files'
    return pageData;
  },
};

function loadTemplate(template) {
  return fs.readFileSync(path.join(__dirname, '../../data/templates/', template + '.js'), 'UTF-8');
}

function getPagesForUser(uid) {
  return page.getPages(uid);
}

function parseTemplateData(template) {
  console.log('here');
  console.log(template);
  const split = template.split('templateData = ')[1].split(';')[0];
  console.log(split);
  const parsed = JSON.parse(split);
  console.log(parsed);
  return parsed;
}

function injectDataIntoTemplate(template, templateData) {
  const before = template.split('templateData = ');
  const after = before[1].split(';')[1];
  return before[0] + JSON.stringify(templateData) + after;
}
