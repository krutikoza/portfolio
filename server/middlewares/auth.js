import {User} from '../models/User.js';
import jwt from "jsonwebtoken";

export const isAuthenticated = async(req,res, next) => {
    try {
        const {token} = req.cookies;
        
        if(!token) {
            return res.status(400).json({
                success: false,
                message: "Login to access this page",
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = User.findById(decode._id);
        
        req.user = user;

        next();
    }
    catch (error){
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}
