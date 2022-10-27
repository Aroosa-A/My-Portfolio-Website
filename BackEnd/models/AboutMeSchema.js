import mongoose from "mongoose";



const AboutMeSchema = new mongoose.Schema(
    {
        Heading: {
            type: String,
            Required: true
        },
        Detail: {
            type: String,
            Required: true
        }
    }
);

const About = new mongoose.model("AboutMe", AboutMeSchema);

export default About;