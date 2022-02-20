import { NextFunction, Request, Response } from 'express';

    interface Error {
    name?: string,
    stack?: string,
    message?: string,
    status?: number,
}

const errorMiddleware = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || 'Whoops!! something went wrong';
    res.status(status).json({ status, message });
}

export { errorMiddleware, Error };
