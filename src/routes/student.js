var express = require('express');
var router = express.Router();
var Api = require('../api/index')
/* GET users listing. */
router.get('/getStudent', async function (req, res, next) {
    const data = await Api.getStudent(req.query)
    res.send(data)
});
router.post('/addStudent', async function (req, res, next) {
    console.log(req.body);
    const data = await Api.addStudent(req.body)
    res.send(data)
});

router.post('/delStudent', async function (req, res, next) {
    console.log(req.body);
    const data = await Api.delStudent(req.body)
    res.send(data)
});
router.post('/updateStudent', async function (req, res, next) {
    console.log(req.body);
    const data = await Api.updateStudent(req.body)
    res.send(data)
});
module.exports = router;
