import { Router } from 'express';
import { GetInfo } from '../controller/info.controller';

export const infoRouter = Router();

infoRouter.get('/', GetInfo);
