import mongoose from "mongoose";



const headingsSchema = new mongoose.Schema(
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

const ExperienceSchema = new mongoose.Schema(
    {
        headings: {
            type: [headingsSchema],
            default: [],
            Required: true
        },
        Detail: {
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


const Experiences = new mongoose.model("Experience", ExperienceSchema);

export default Experiences;