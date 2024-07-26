require("dotenv/config");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const db = require("./models");
const adminExpenditureRouter = require("./routes/adminExpenditureRouter.js");
const userExpenditureRouter = require("./routes/userExpenditureRouter.js");
const monthRouter = require("./routes/monthRouter.js");
const userRouter = require("./routes/userRouter.js");
const userAuthRouter = require("./routes/userAuth.js");

// const runDbMigrations = require("./db/migrations.js");
// import test from "./migrations/test.js";
const app= express();
const PORT = process.env.PORT || 8000;

// initialise middleware
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

// routes
app.use("/api/expt/admin", adminExpenditureRouter);
app.use("/api/expt/user", userExpenditureRouter);
app.use("/api/month", monthRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", userAuthRouter);

const start = async () => {
    // check database connection
    db.sequelize.authenticate().then(() => {
    console.log("Successfully connected to database i_am_not_broke");
    }).catch((err) => {
    console.log(err);
    });

    // sync database (DEVELOPMENT ONLY)
    db.sequelize.sync({ force: true })
    .then(() => {
        console.log("database re-synced");
    })
    .catch((err) => {
        console.log(err);
    });

    // listen
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

start();