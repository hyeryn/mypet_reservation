const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.get('/', function(req, res){ // 메인 페이지 주소로 수정
    con.query(`SELECT * FROM diary;`, (err, row) => { // 최신 것만 보이게?
        if (err) {
            console.log('diary load fail')
        }
        else{
            // diary_title, diary_date, diary_context 화면에 뿌리기
            console.log('diary load success')
        }
    });
})