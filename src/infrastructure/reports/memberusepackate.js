const db = require("../database")

const excute = async() => {
    try {
        const sql = "SELECT tb1.first_name,tb1.last_name,tb3.package_name,tb3.package_detail,tb2.register_date,tb2.expire_date FROM member as tb1 INNER JOIN use_package as tb2 ON tb1.id = tb2.memberid INNER JOIN package  as tb3 ON tb3.id = tb2.packageid  WHERE to_char(tb2.create_date, 'yyyy-mm-dd')  = to_char(CURRENT_DATE, 'yyyy-mm-dd') "
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