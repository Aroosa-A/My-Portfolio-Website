import express from 'express';
const router = express.Router();
import Educations from '../models/EducationSchema.js';



router.use(express.json());

router.route('/')
    .get((req, res) => {
        Educations.find((error, education) => {
            error ? res.send("Data not found") :
                res.json(education);
        });
    });


export { router as EducationRoute };