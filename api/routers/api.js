require('module-alias/register');

const express = require('express');
const apiRouter = express.Router();
const sessionRouter = express.Router();


const authRouter = require('./auth/auth');
const userRouter = require('./auth/users');

apiRouter.use("/user",userRouter);
apiRouter.use("/auth",authRouter);
authRouter.use("/:sessionToken_id",sessionRouter);




module.exports = apiRouter;