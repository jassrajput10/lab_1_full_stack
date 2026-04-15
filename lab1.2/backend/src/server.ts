import { clerkMiddleware } from '@clerk/express';
import './lib/prisma';
import 'dotenv/config';
process.env['DATABASE_URL'] = 'postgresql://postgres:password@localhost:5433/pixelldb?schema=public';
import express from 'express';
import cors from 'cors';

import employeeRoutes from './routes/employeeRoutes';
import departmentRoutes from './routes/DepartmentRoutes';
import roleRoutes from './routes/RoleRoutes';

const app = express();

// Allow requests from the frontend AND from Postman / dev tools
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (Postman, curl) or from localhost
    if (!origin || origin.startsWith('http://localhost')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

app.use(clerkMiddleware());

// Health check — GET http://localhost:3001/health
app.get('/health', (_req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    routes: [
      'GET  /api/employees',
      'GET  /api/employees/:id',
      'GET  /api/employees/department/:department',
      'POST /api/employees',
      'GET  /api/departments',
      'GET  /api/departments/:name',
      'GET  /api/roles',
      'GET  /api/roles/:person',
      'POST /api/roles',
    ]
  });
});

app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/roles', roleRoutes);

// 404 fallback
app.use((_req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

if (process.env['VERCEL'] !== '1') {
  app.listen(3001, () => {
    console.log('Backend running on http://localhost:3001');
    console.log('Health check: http://localhost:3001/health');
  });
}

export default app;