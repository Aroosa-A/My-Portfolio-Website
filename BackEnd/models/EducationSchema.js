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
);
const detailsSchema = new mongoose.Schema(
    {
        Detail: {
            type: String,
            Required: true
        }
    }
)

const EducationSchema = new mongoose.Schema(
    {
        headings: {
            type: [headingsSchema],
            default: [],
            Required: true
        },
        Details: {
            type: [detailsSchema],
            default: [],
            Required: true
        },
        learnings: {
            type: [learningsSchema],
            default: [],
            Required: true
        }
    }
)


const Educations = new mongoose.model("Education", EducationSchema);

export default Educations;