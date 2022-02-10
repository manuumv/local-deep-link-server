import express from 'express';
import { initTunnel } from './config/initTunnel';
import { initRoutes } from './config/initRoutes';

const port = process.env.PORT || 80;
const subdomain = process.env.SUBDOMAIN || 'deeplink';

const app = express();

initRoutes(app);
initTunnel(port, subdomain);
app.listen(port);
