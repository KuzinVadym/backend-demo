import express from "express";
import users from "./users";


const router = express.Router();

router.get('/', function(req, res, next) {
    console.log("Get From File Manager");
    let data = {
        service: "File Manager",
        call: "Get",
        time: new Date().getMilliseconds()
    };
    res.json(data);
});

router.use('/users', users);

export default router;