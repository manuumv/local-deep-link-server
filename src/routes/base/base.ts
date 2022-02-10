import { Router } from 'express';
import { resolve } from 'path';

export const baseRoute = (): Router => {
  const router = Router();

  router.use('/', (_req, res) => {
    res.sendFile(resolve('src/assets/index.html'));
  });

  return router;
};
