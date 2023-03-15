var express = require('express');
var router = express.Router();
var reportMemberNewToDay = require("../../infrastructure/reports/membernewtoday")
var reportMemberUsepackageToDay = require("../../infrastructure/reports/memberusepackate")

router.get('/member-new-today', async(req, res, next) => {
    reportMemberNewToDay.excute().then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(400).json(error);
    })
});
router.get('/member-use-package-today', async(req, res, next) => {
    reportMemberUsepackageToDay.excute().then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(400).json(error);
    })
});
module.exports = router;