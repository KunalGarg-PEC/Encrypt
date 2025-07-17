import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import authRoutes from './routes/auth';
import sheetRoutes from './routes/sheets';
import { ensureAuth } from './middlewares/auth';
import { ensureTenant } from './middlewares/tenant';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL,
  entities: ['./src/models/*.ts'],
  synchronize: true, // NOTE: for development only
});

AppDataSource.initialize().then(() => {
  const app = express();

  // Enable CORS for the frontend app
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

  app.use(express.json());

  // Public auth routes (login, etc.)
  app.use('/auth', authRoutes);

  // Protect all following routes
  app.use(ensureAuth);

  // Set tenant for RLS
  app.use(ensureTenant);

  // Capability sheet CRUD
  app.use('/agentsheets', sheetRoutes);

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
  });
}).catch(error => {
  console.error('Error during Data Source initialization:', error);
});
