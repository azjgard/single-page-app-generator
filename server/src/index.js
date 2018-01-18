import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';
import config from './config.json';

let app = express();

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(
  cors({
    exposedHeaders: config.corsHeaders,
  }),
);

app.use(
  bodyParser.json({
    limit: config.bodyLimit,
  }),
);

// api router
app.use('/api/v1', api);

app.listen(process.env.PORT || config.port, () => {
  console.log(`Started on port ${process.env.PORT || config.port}`);
});

export default app;
