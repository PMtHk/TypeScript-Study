import express from 'express';

import todoRoutes from './rotues/todos';

const app = express();

app.use('/todos', todoRoutes);

// error handling middleware function
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({message: err.message})
  }
);

app.listen(3000);
