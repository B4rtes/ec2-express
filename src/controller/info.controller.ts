import { Request, Response, NextFunction } from 'express';

export const GetInfo = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(`Request from ${req.originalUrl}`);

    res.json({
        data: 'Get info Content',
    });
};
