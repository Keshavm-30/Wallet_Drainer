import express from 'express';
import {getUserDetails} from '../controller/controller.js'

const router = express.Router();


router.get("/getDetails/:publicKey",getUserDetails);


export default router;