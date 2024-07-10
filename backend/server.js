require("dotenv/config");
const express = require("express");
const cors = require("cors");
const adminExpenditureRouter = require("./routes/adminExpenditureRouter.js");
const userExpenditureRouter = require("./routes/userExpenditureRouter.js");
const monthRouter = require("./routes/monthRouter.js");
const userRouter = require("./routes/userRouter.js");

// const runDbMigrations = require("./db/migrations.js");
// import test from "./migrations/test.js";
const app= express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
    res.send("Server up and running");
});

// routes
app.use("/api/expt/admin", adminExpenditureRouter);
app.use("/api/expt/user", userExpenditureRouter);
app.use("/api/month", monthRouter);
app.use("/api/user", userRouter);

const start = async () => {
    // test();
    // await runDbMigrations();

    // try {
    //     await sequelize.authenticate();
    //     console.log("successful connection");
    // } catch (err) {
    //     console.log(err);
    // };

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

start();