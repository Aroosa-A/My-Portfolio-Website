import express from 'express';
const router = express.Router();
import MainImage from '../models/imgSchema.js';


router.use(express.json());


router.route('/')
    .get((req, res) => {
        MainImage.find((error, img) => {
            error ? res.send(`Data not found`) :
                res.json(img);
        })
    })



export { router as HomeRoute };