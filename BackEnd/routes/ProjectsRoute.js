import express from 'express';
const router = express.Router();
import Projects from '../models/ProjectsSchema.js';



router.use(express.json());

router.route('/')
    .get((req, res) => {
        Projects.find((error, project) => {
            error ? res.send("Data not found") :
                res.json(project);
        });
    });


export { router as ProjectsRoute };