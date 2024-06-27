require("dotenv/config");
const express = require("express");
const expenditureRouter = require("./routes/expenditureRouter.js");
const monthRouter = require("./routes/monthRouter.js");

// const runDbMigrations = require("./db/migrations.js");
// import test from "./migrations/test.js";
const app= express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server up and running");
});

// routes
app.use("/api/expt", expenditureRouter);
app.use("/api/month", monthRouter);

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