import express from "express";
import {  getUser, getAllUsers, updateUser, deleteUser, followUser, unFollowUser } from "../Controllers/UserController.js";
import authMiddleWare from "../MiddleWare/authMiddleWare.js";

const router = express.Router();

router.get('/:id', getUser)
router.get('/', getAllUsers)
router.put('/:id',authMiddleWare ,updateUser)
router.delete('/:id',authMiddleWare , deleteUser)
router.put('/:id/follow',authMiddleWare , followUser)
router.put('/:id/unfollow',authMiddleWare , unFollowUser)


export default router;