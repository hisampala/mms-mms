var express = require('express');
var router = express.Router();
var repo = require("../../infrastructure/repository/package-use-member.repo")
var fuc = require("../function")
router.get('/', async(req, res, next) => {
    const parenId = await fuc.GetParentId(req.baseUrl, "member")
    repo.GetAll(parenId).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(400).json(error);
    })
});
router.post('/', async(req, res, next) => {
    const item = req.body
    item["memberid"] = await fuc.GetParentId(req.baseUrl, "member")
    repo.Create(item).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        console.log(error);
        res.status(400).json(error);
    })
});
module.exports = router;