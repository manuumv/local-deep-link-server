import { Application } from "express";
import { Routes } from '../model/routes.model';
import { baseRoute } from '../routes/base/base';
import { wellKnownRoute } from '../routes/wellKnown/wellKnown';

export const initRoutes = (app: Application): void => {
  app.use(Routes.WELL_KNOWN, wellKnownRoute());
  app.use(baseRoute());
};
