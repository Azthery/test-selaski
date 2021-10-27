const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const secretWord = 'secret';

const connection = require('../connection/connection');

router.get('/', (req, res) =>{
    connection.query('SELECT * FROM users', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.error(err);
        }
    })
});

router.post('/singin', (req, res) => {
    const {username, password} = req.body;
    connection.query('SELECT user_name, user_id FROM users WHERE user_name=? AND password=?', 
    [username, password],
    (err, rows, fields) => {
        if(!err){
            if(rows.length > 0){
                let data = JSON.stringify(rows[0]);
                let token = jwt.sign(data, secretWord);
                res.json({token});
            } else {
                res.json('Invalid Username or password')
            }
        } else{
            console.log(error);
        }
    });
});

router.post('/test', verifyToken, (req, res) => {
    // if(req.data.user_id = 'admin')
    res.json('Secret info');
})

function verifyToken(req, res, next){
    if(!req.headers.authorization) return res.status(401).json('Permission denied')

    const token = req.headers.authorization.substr(7);
    if(token !== ''){
        const content = jwt.verify(token, secretWord);
        req.data = content;
        next();
    } else {
        res.status(401).json('Empty Token');
    }

}

module.exports = router;