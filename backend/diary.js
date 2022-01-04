const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.get('/Mypage', function(req, res){
    var date = req.body.date;
    var title = req.body.title;
    var context = req.body.context;
    var image = req.body.image;
    con.query(`INSERT INTO diary (date, title, context, image) VALUES (\'${date}\', \'${title}\',\'${context}\', \'${image}\');`, (err) => {
        
        if (err) {
            console.log('diary add fail')
        }
        else{
            console.log('diary add success')
        }
    });
})