
import express, { Request, Response } from 'express';

import cors from 'cors';

import userRoutes from './handlers/userRoutes';

import productRoutes from './handlers/productRouts';

import orderRoutes from './handlers/orderRoutes';

import dashboardRoutes from './services/dashboardRoutes';

import logger from './middleware/logger';


const app: express.Application = express();

app.use(express.json());

const corsOptions = {
  origin: '*',
  credentials: true
};

app.use(cors(corsOptions));

app.use(logger);

const port: number = 5000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello! How are you?');
});


userRoutes(app);
productRoutes(app);
orderRoutes(app);
dashboardRoutes(app);

app.listen(port, () => {
  console.log(`sever start at: http://localhost:${port}`);
});

export default app;

