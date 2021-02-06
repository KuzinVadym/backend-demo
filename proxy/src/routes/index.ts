import express from "express";
import users from "./users";

const router = express.Router();

router.use('/payments', users);

router.get('/health', function(req, res, next) {
    let data = {
        service: "Proxy",
        call: "Get",
        time: new Date().getMilliseconds()
    };
    res.status(200).json(data);
});


export default router;