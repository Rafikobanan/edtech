import express from 'express';
import next from 'next';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import routes from './routes';
import languageMiddleware from './middlewares/language';
import { isProduction } from './config';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(
    helmet({
      contentSecurityPolicy: isProduction
    })
  );
  server.use(cookieParser());

  server.use(routes);

  server.use(languageMiddleware);

  server.all('*', (req, res) => handle(req, res));

  server.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
});
