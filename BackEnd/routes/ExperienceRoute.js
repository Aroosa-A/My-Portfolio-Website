import express from 'express';
const router = express.Router();
import Experiences from '../models/ExperienceSchema.js';



router.use(express.json());

router.route('/')
    .get((req, res) => {
        Experiences.find((error, experience) => {
            error ? res.send("Data not found") :
                res.json(experience);
        });
    });


export { router as ExperienceRoute };