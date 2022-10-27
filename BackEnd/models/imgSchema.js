import mongoose from 'mongoose';




const imgSchema = new mongoose.Schema(
    {
        imgUrl: {
            type: String,
            Required: true
        }
        // img: {
        //     data: Buffer,
        //     contentType: String
        // }
    }
);

const MainImage = new mongoose.model('Image', imgSchema);

export default MainImage;