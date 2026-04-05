import { PrismaClient } from '@prisma/client';

const DATABASE_URL = 'postgresql://postgres:password@localhost:5433/pixelldb?schema=public';

// Set before PrismaClient initializes
process.env['DATABASE_URL'] = DATABASE_URL;

const prisma = new PrismaClient();

export default prisma;