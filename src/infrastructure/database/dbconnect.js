const confDb = require("./config")
const { Pool } = require("pg")
const db = new Pool({
    user: confDb.user,
    password: confDb.password,
    host: confDb.host,
    port: confDb.port,
    database: confDb.database,
})
async function PrintTable() {

    const client = await db.connect();
    try {
        const result = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';");
        console.log(result.rows);
    } finally {
        client.release();
    }
}

module.exports = db;