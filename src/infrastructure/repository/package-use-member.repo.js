const db = require("../database")
const uuid = require("uuid")
const memberRepo = require("./member.repo")
const packageRepo = require("./package.repo")
const moment = require("moment")
const Create = async(item) => {
    try {
        const packageuse = require("../validate/create-use-package-member.repo")(item)
        const member = await memberRepo.GetById(packageuse.memberid);
        if (member.length < 1) throw `Not fount member Id = ${packageuse.memberid}`;
        const package = await packageRepo.GetById(packageuse.packageid)
        if (package.length < 1) throw `Not fount package Id = ${packageuse.packageid}`;
        const sql = "INSERT INTO use_package (id,packageid,memberid,expire_date) VALUES ($1,$2,$3,$4)"
        const itemPackage = package.pop();
        const dateUse = Number.parseInt(itemPackage.date_use)
        const values = [uuid.v4(), packageuse.packageid, packageuse.memberid, moment().add(dateUse, "days").toDate()]
        const result = await db.query(sql, values)
        return result.rowCount ? "Create Packageuse successfully  " : "Create Packageuse Fail  ";
    } catch (error) {
        throw error;
    }
}

const GetAll = async(parenId) => {
    try {
        const sql = "SELECT * FROM use_package WHERE memberid = $1 "
        const values = [parenId]
        const result = await db.query(sql, values);
        return result.rows
    } catch (error) {
        throw error;
    }
}


module.exports = {
    GetAll,
    Create
}