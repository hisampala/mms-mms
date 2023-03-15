const db = require("../database")
const uuid = require("uuid")
const Create = async(item) => {
    try {
        const packge = await require("../validate/create-packge")(item)
        const sql = "INSERT INTO package (id,package_name,package_detail,date_use,service_charge) VALUES ($1, $2,$3,$4,$5)  "
        const values = [uuid.v4(), packge.package_name, packge.package_detail, packge.date_use, packge.service_charge]
        const result = await db.query(sql, values)
        return result.rowCount ? "Create Packge successfully  " : "Create Packge Fail  ";
    } catch (error) {
        throw error;
    }
}
const Update = async(id, item) => {
    try {
        const packge = await require("../validate/update-packge")(item)
        const sql = "UPDATE package SET package_name = $1,package_detail = $2,date_use = $3,service_charge = $4 WHERE id = $5";
        const values = [packge.package_name, packge.package_detail, packge.date_use, packge.service_charge, id]
        const result = await db.query(sql, values)
        return result.rowCount ? "Update Packge successfully  " : "Update Packge Fail  ";
    } catch (error) {
        console.log(error);
        throw error;
    }
}
const Delete = async(id) => {
    try {
        const sql = "DELETE FROM package WHERE id = $1";
        const values = [id];
        const result = await db.query(sql, values);
        return result.rowCount ? "Delete Package successfully  " : "Delete Packge Fail  ";
    } catch (error) {
        throw error;
    }
}
const GetAll = async() => {
    try {
        const sql = "SELECT * FROM package  "
        const result = await db.query(sql);
        return result.rows
    } catch (error) {
        throw error;
    }
}
const GetById = async(id) => {
    try {
        const sql = "SELECT * FROM package where id = $1"
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