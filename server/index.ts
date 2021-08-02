import express from 'express';
import next from 'next';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import translationMiddleware from './middlewares/translation';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(cookieParser());

  server.use(translationMiddleware);

  server.all('*', (req, res) => handle(req, res));

  server.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
});
