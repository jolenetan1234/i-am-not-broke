import "dotenv/config";
import express from "express";
import router from "./routes/expenditureRouter.js";
import runDbMigrations from "./db/migrations.js";
import test from "./db/test.js";
const app= express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server up and running");
});

app.use("/api/expenditure", router);

const start = async () => {
    // test();
    await runDbMigrations();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

start();