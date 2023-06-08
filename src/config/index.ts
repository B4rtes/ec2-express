import dotenv from 'dotenv';

dotenv.config({
    path: './.env', // Default behav
});

export const config = {
    port: process.env.PORT || 3001,
};
