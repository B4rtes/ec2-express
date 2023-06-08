import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const errorHandler = (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(`Common Error handler`);
};
