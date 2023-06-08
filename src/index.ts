import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config';
import { errorHandler } from './middleware/errorHandler';
import { router } from './routes';

const app = express();

const port = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(
    cors({
        origin: '*',
    })
);

app.use('/api', router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`App running on PORT ${port}`);
});
