
import {app} from "./app.js";
import dotenv from "dotenv";
import {connectDatabase} from "./config/database.js"
import cloudinary from "cloudinary";
import path from "path"

dotenv.config({path:"./server/config/config.env"})

connectDatabase();

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret:process.env.CLOUDNARY_API_SECRET,
})




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});