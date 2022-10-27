import express from 'express';
const router = express.Router();
import About from '../models/AboutMeSchema.js';



router.use(express.json());

router.route('/')
    .get((req, res) => {
        About.find((error, about) => {
            error ? res.send("Data not found") :
                res.json(about);
        });
    });


export { router as AboutMeRoute };