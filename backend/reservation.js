const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.get('/reservation', function(req, res){ // 예약 페이지 주소로 수정
    con.query(`INSERT INTO reservation (date) VALUES (\'${date}\');`, (err) => {
        if (err) {
            console.log('reservation save fail')
        }
        else {
            console.log('reservation save success')
        }
    });
})