import express from "express";
import users from "./users";

const router = express.Router();

router.use('/users', users);

router.get('/', function(_req, res, _next) {
    console.log("Get From Proxy!!");
    let data = {
        service: "Proxy",
        call: "Get",
        time: new Date().getMilliseconds()
    };
    res.json(data);
});

export default router;