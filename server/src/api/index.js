import { version } from '../../package.json';
import { Router } from 'express';
import compiler from '../workers/compiler';
import page from '../workers/page';

let api = Router();

// perhaps expose some API metadata at the root
api.get('/', (req, res) => {
  res.json({ version });
});

api.get('/page', async (req, res) => {
  res.send(await page.getPages(req.query.user_uid));
});

api.post('/page', (req, res) => {
  page.addPage(req.query.user_uid, req.body);
  res.send('SUCCESS');
});

api.get('/compile', async (req, res) => {
  const userUid = req.query.user_uid;
  const spa = await compiler.compile(userUid);
  res.send(spa);
});

export default api;
