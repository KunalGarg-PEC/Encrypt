// backend/src/middlewares/tenant.ts
import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../index';

export function ensureTenant(req: any, res: Response, next: NextFunction) {
  const tenantId = req.user.tenantId;
  // Use the initialized DataSource.manager instead of getManager()
  AppDataSource.manager.query(
    `SET app.current_tenant = '${tenantId}';`
  ).then(() => next())
   .catch(err => {
     console.error('Error setting tenant context:', err);
     res.sendStatus(500);
   });
}
