const router = require('express').Router();
var con = require('./db.js');

router.post('/signup', function (req, res) { // 하위 링크 수정
    var email = req.body.email;
    var pw = req.body.password;
    var nickname = req.body.nickName; 
    var name = req.body.name;
    var mobile = req.body.phoneNumber;
    console.log(email)
    // addr는 프로필 설정할 때 추가

    con.query(`INSERT INTO user (email, pw, nickname, name, mobile) VALUES (\'${email}\', \'${pw}\',\'${nickname}\', \'${name}\', \'${mobile}\');`, (err) => {
        if (err) res.json({ success: false, msg: 'signup fail' });
        else res.json({ success: true, msg: 'signup success' });
    });
});


router.post('/login', function (req, res) {
    var email = req.body.email; 
    var pw = req.body.password;


    con.query(`SELECT * FROM user WHERE email='${email}' AND pw='${pw}';`, (err, row) => {
        if (err) {
            res.json({ success: false, msg: 'login fail' });
        }
        else if (row.length == 0) {
            res.json({ success: false, msg: 'login fail' });
        }
        else {
            con.query(`SELECT JSON_ARRAYAGG(JSON_OBJECT('id', user_id, 'nickname', nickname)) AS result FROM user WHERE user_id = ${row[0].user_id} ;`, (err, row) => {
                if (err) res.send(err);
                else {
                    res.json({ success: true, result: JSON.parse(row[0].result) });
                }
            });
        }
    });
});

module.exports = router;