import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


import { HomeRoute } from './routes/HomeRoute.js';
import { AboutMeRoute } from './routes/AboutMeRoute.js';
import { ProjectsRoute } from './routes/ProjectsRoute.js';
import { ExperienceRoute } from './routes/ExperienceRoute.js';
import { EducationRoute } from './routes/EducationRoute.js';







dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/HomeRoute', HomeRoute);
app.use('/AboutMeRoute', AboutMeRoute);
app.use('/ProjectsRoute', ProjectsRoute);
app.use('/ExperienceRoute', ExperienceRoute);
app.use('/EducationRoute', EducationRoute);





const main = async () => {
    console.log(`Connecting to Database at ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
}

main().catch(error => console.log(error));

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});


export default server;