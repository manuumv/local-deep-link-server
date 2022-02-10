import { Router } from 'express'
import assetlinks from '../../assets/assetlinks.json';
import appleAppSiteAssociation from '../../assets/apple-app-site-association.json';
import { WellKnownRoutes } from '../../model/routes.model';

export const wellKnownRoute = (): Router => {
  const router = Router()

  router.get(WellKnownRoutes.ASSETLINKS, (_req, res) => {
    res.send(assetlinks);
  });

  router.get(WellKnownRoutes.APPLE_APP_SITE, (_req, res) => {
    res.send(appleAppSiteAssociation);
  });

  return router;
}