import db from "./db.js";

const createExpenditureTable = `
    CREATE TABLE IF NOT EXISTS expenditures (
        id SERIAL PRIMARY KEY,
        amount NUMERIC(10, 2) NOT NULL,
        date TIMESTAMP NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        category TEXT
    );
`;

const runDbMigrations = async () => {
    console.log("BEGIN DB MIGRATION");

    const client = await db.connect();

    try {
        await client.query("BEGIN");

        // client.query() returns a promise
        await client.query(createExpenditureTable);

        await client.query("COMMIT");

        console.log("END DB MIGRATION");
    } catch (err) {
        await client.query("ROLLBACK");
        console.log("DB MIGRATION FAILED");
        throw err;
    } finally {
        client.release();
    };
};

export default runDbMigrations;