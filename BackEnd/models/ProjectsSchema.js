import mongoose from "mongoose";



const subHeadingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            Required: true
        }
    }
);
const learningsSchema = new mongoose.Schema(
    {
        learning: {
            type: String,
            Required: true
        }
    }
)

const ProjectsSchema = new mongoose.Schema(
    {
        subHeading: {
            type: [subHeadingSchema],
            default: [],
            Required: true
        },
        projectDetail: {
            type: String,
            Required: true
        },
        learnings: {
            type: [learningsSchema],
            default: [],
            Required: true
        }
    }
)


const Projects = new mongoose.model("Project", ProjectsSchema);

export default Projects;