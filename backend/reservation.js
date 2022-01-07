const router = require('express').Router();
var con = require('./db.js');

router.post('/reservation', function (req, res) { // 하위 링크 수정
    var user_id = req.body.user_id;
    var date = new Date(req.body.date);
    var svc_id = req.body.svc_id;
    con.query(`INSERT INTO reservation (date, svc_id, client_id) VALUES (\'${date}\', \'${svc_id}\',\'${user_id}\');`, (err) => {
        if (err) res.json({ success: false, msg: 'res fail' });
        else res.json({ success: true, msg: 'res success' });
    });
});