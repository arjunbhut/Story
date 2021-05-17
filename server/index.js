import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import movieRoutes from './Routes/movie.js';

const app = express();

dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.use('/movie',movieRoutes);


const PORT  = process.env.PORT||5000;


app.listen(PORT, () => console.log(`server is listening at port ${PORT}`));
