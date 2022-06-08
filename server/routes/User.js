import express from "express";

import { login, logout, getUser, myProfile, contact,updateUser, addTimeline, addprojects, deleteTimeline, deleteProjects } from "../Controller/User.js"
import {isAuthenticated} from "../middlewares/auth.js";

export const userRouter = express.Router();

userRouter.route("/login").post(login)

userRouter.route("/logout").get(logout)
userRouter.route("/user").get(getUser)

userRouter.route("/me").get(isAuthenticated, myProfile)

userRouter.route("/admin/update").put(isAuthenticated, updateUser)

userRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline)

userRouter.route("/admin/project/add").post(isAuthenticated, addprojects)

userRouter.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline)
userRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProjects)

userRouter.route("/me").post(contact)

