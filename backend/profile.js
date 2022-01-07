const router = require('express').Router();
var con = require('./db.js');


router.post('/pet', function (req, res) {
    var image = req.body.imageSrc;
    var owner = req.body.owner;
    var name = req.body.aniname;
    var type = req.body.kind;
    var neutering = req.body.sex;
    var age = req.body.age;
    var weight = req.body.weight;
    var breed = req.body.ani;
    //console.log(name)
    con.query(`INSERT INTO pet (image, name, type, neutering, age, weight, breed) VALUES (\'${image}\', \'${name}\', \'${type}\', \'${neutering}\',\'${age}\',\'${weight}\',\'${breed}\',);`, (err) => {
        if (err) res.json({ success: false, msg: 'register fail' });
        else res.json({ success: true, msg: 'register success' });
    });
});

module.exports = router;