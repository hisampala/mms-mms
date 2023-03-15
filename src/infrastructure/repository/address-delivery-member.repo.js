const db = require("../database")
const uuid = require("uuid")
const memberRepo = require("./member.repo")
const Create = async(item) => {
    try {
        const addrees = require("../validate/create-address.valid")(item)
        const member = await memberRepo.GetById(addrees.memberid);
        if (member.length < 1) throw `Not fount member Id = ${addrees.memberid}`;
        const sql = "INSERT INTO address_delivery (id,memberid,address,sub_district,district,province,post_code) VALUES ($1,$2,$3,$4,$5,$6,$7)"
        const values = [uuid.v4(), addrees.memberid, addrees.address, addrees.sub_district, addrees.district, addrees.province, addrees.post_code]
        const result = await db.query(sql, values)
        return result.rowCount ? "Create Addressdeliverymember successfully" : "Create Addressdeliverymember Fail";
    } catch (error) {
        throw error;
    }
}
const Update = async(id, item) => {
    try {
        const addrees = require("../validate/update-address.valid")(item)
        const sql = "UPDATE address_delivery SET address=$1,sub_district=$2,district=$3,province=$4,post_code=$5 WHERE id = $6";
        const values = [addrees.address, addrees.sub_district, addrees.district, addrees.province, addrees.post_code, id]
        const result = await db.query(sql, values)
        return result.rowCount ? "Update Addressdeliverymember successfully  " : "Update Addressdeliverymember Fail  ";
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const Get = async(parenId) => {
    try {
        const sql = "SELECT address,sub_district,district,province,post_code FROM address_delivery WHERE memberid = $1 "
        const values = [parenId]
        const result = await db.query(sql, values);
        return result.rows.pop()
    } catch (error) {
        throw error;
    }
}
const GetByMemberId = async(id) => {
    try {
        const sql = "SELECT id,memberid FROM address_delivery where memberid = $1"
        const values = [id]
        const result = await db.query(sql, values);
        return result.rows;
    } catch (error) {
        throw error;
    }
}
const Upset = async(item) => {
    const member = await GetByMemberId(item.memberid)
    if (member.length > 0) {
        const id = member[0].id
        item["id"] = id
        console.log(item);
        return await Update(id, item)
    }
    console.log(item);
    return await Create(item)
}
module.exports = {
    Get,
    Upset
}