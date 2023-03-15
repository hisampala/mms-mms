var express = require('express');
var router = express.Router();
var repo = require("../../infrastructure/repository/package.repo")

router.get('/', async(req, res, next) => {
    repo.GetAll().then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(400).json(error);
    })
});
router.get('/:id', async(req, res, next) => {
    const { id } = req.params
    repo.GetById(id).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(400).json(error);
    })
});
router.post('', async(req, res, next) => {
    const item = req.body
    repo.Create(item).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(400).json(error);
    })
});
router.put('/:id', async(req, res, next) => {
    const id = req.params.id
    const item = req.body
    item["id"] = id;
    repo.Update(id, item).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(400).json(error);
    })
});


module.exports = router;