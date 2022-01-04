const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qlenfrlsms99', // 비밀번호
    database: 'projectDB'
});
con.connect();

router.post('/Signup', function (req, res) {
    var email = req.body.email;
    var pw = req.body.pw;
    var nickname = req.body.nickname; 
    var name = req.body.name;
    var mobile = req.body.mobile;
    // addr는 프로필 설정할 때 추가

    con.query(`INSERT INTO user (email, pw, nickname, name, mobile) VALUES (\'${email}\', \'${pw}\',\'${nickname}\', \'${name}\', \'${mobile}\');`, (err) => {
        if (err) {
            console.log('sign up fail')
        }
        else {
            console.log('sign up success')
            console.log(email+' '+pw)
        }
    });
});


router.post('/Login', function (req, res) {
    var email = req.body.email; 
    var pw = req.body.pw;

    con.query(`SELECT * FROM user WHERE email='${email}' AND pw='${pw}';`, (err, row) => {
        if (err) {
            console.log('sign in fail')
        }
        else if (row.length == 0) {
            console.log('sign in fail')
        }
        else {
            // email, password 대조

        }
    });
});