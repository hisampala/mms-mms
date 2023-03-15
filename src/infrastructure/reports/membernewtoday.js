const db = require("../database")
const excute = async() => {
    try {

        const sql = "SELECT first_name,last_name,number_phone FROM member WHERE to_char(create_date, 'yyyy-mm-dd')  = to_char(CURRENT_DATE, 'yyyy-mm-dd') "

        const result = await db.query(sql)

        return { total: result.rowCount, data: result.rows };
    } catch (error) {
        console.log(error);
        throw error;
    }

}
module.exports = {
    excute
}