import fs from 'fs-extra';
import path from 'path';
import page from './page';
import { execSync } from 'child_process';

export default {
  compile(uid) {
    //request files from the server
    const pageData = getPagesForUser(uid);
    injectPages(pageData, uid);
    copyInternal(uid);
    injectFiles(pageData, uid);
    ejectReact(uid);

    //spit_back_files'
    return pageData;
  },
};

function getPagesForUser(uid) {
  return page.getPages(uid);
}

function injectPages(pageData, uid) {
  let templates = {};
  let tempData = {};
  pageData.forEach(val => {
    if (!templates[val.template]) {
      templates[val.template] = loadTemplate(val.template);
      tempData[val.template] = templates[val.template].templateData;
    }
    for (let prop in val.customData) {
      tempData[val.template][prop] = val.customData[prop];
    }
    const finalTemplate = injectDataIntoTemplate(templates[val.template].template, tempData, uid, val.url);
  });
}

function loadTemplate(template) {
  const reactComponent = fs.readFileSync(`${__dirname}/../../data/templates/${template}/template.js`, 'utf8');
  return { template: reactComponent, templateData: require(`../../data/templates/${template}/templateData`) };
}

function injectDataIntoTemplate(template, tempData, userUid, url) {
  const root = path.join(__dirname, `../../data/tmp/${userUid}`);
  if (!fs.existsSync(root)) fs.mkdirSync(root);
  fs.writeFileSync(path.join(root, `/${url.replace('/', '_')}.js`), `const templateData = ${JSON.stringify(tempData)}\n\n${template}`);
  return;
}

function copyInternal(uid) {
  fs.copySync('data/internal', `data/tmp/${uid}/`);
}

function injectFiles(pageData, uid) {
  const app = fs.readFileSync(`${__dirname}/../../data/tmp/${uid}/app.js`, 'utf8');
  const preComponents = app.split('###components###');
  const preRoutes = preComponents[1].split('###routes###');
  let components = '';
  let routes = '';
  pageData.forEach(val => {
    const fileName = val.url.replace('/', '_');
    components += `import ${fileName} from './${fileName}'\n`;
    routes += `<Route exact path="${val.url}" component={${fileName}} />\n`;
  });
  fs.writeFileSync(`${__dirname}/../../data/tmp/${uid}/app.js`, preComponents[0] + components + preRoutes[0] + routes + preRoutes[1]);
}

function ejectReact(uid) {
  execSync(`cd ${__dirname}/../../data/tmp/${uid}`);
  execSync(`npm install`);
  console.log('npm done');
  execSync(`${__dirname}/../../node_modules/.bin/react-scripts build`);
}
