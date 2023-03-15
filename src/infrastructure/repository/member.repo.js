const db = require("../database")
const uuid = require("uuid")
const Create = async (item) => {
    try {
        item.birth_day = new Date(item.birth_day)
        const member = await require("../validate/create-meber.valid")(item)
        const sql = "INSERT INTO member (id,first_name,last_name,birth_day,number_phone) VALUES ($1, $2,$3,$4,$5)  "
        const values = [uuid.v4(), member.first_name, member.last_name, member.birth_day, member.number_phone]
        const result = await db.query(sql, values)
        return result.rowCount ? "Create Member successfully  " : "Create Member Fail  ";
    } catch (error) {
        throw error;
    }
}
const Update = async (id, item) => {
    try {
        console.log(item);
        item.birth_day = new Date(item.birth_day)
        const member = await require("../validate/update-meber.valid")(item)
        const sql = "UPDATE member SET first_name = $1, last_name = $2 , birth_day = $3 WHERE id = $4";
        const values = [member.first_name, member.last_name, member.birth_day, id]
        const result = await db.query(sql, values)
        return result.rowCount ? "Update Member successfully  " : "Update Member Fail  ";
    } catch (error) {
        console.log(error);
        throw error;
    }
}
const Delete = async (id) => {
    try {
        const sql = "DELETE FROM member WHERE id = $1";
        const values = [id];
        const result = await db.query(sql, values);
        return result.rowCount ? "Delete Member successfully  " : "Delete Member Fail  ";
    } catch (error) {
        throw error;
    }
}
const GetAll = async () => {
    try {
        const sql = "SELECT * FROM member  "
        const result = await db.query(sql);
        return result.rows
    } catch (error) {
        throw error;
    }
}
const GetById = async (id) => {
    try {
        const sql = "SELECT * FROM member where id = $1"
        const values = [id]
        const result = await db.query(sql, values);
        return result.rows;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    Create,
    Update,
    Delete,
    GetAll,
    GetById
}