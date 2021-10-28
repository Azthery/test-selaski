const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

//variables de entorno
const secretWord = 'secret';

const connection = require('./connection/connection');

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
            console.log(err);
        }
    });
});

router.post('/singup', (req, res) => {
    const {username, password} = req.body;
    connection.query(`INSERT INTO users(user_name, password) VALUES("${username}", "${password}")`,
    (err, rows, fields) => {
        if(!err){
            res.json('User created');
        } else{
            res.json('error');
            console.log(err);
        }
    });
});

router.post('/companies', verifyToken, (req, res) => {
    // if(req.data.user_id = 'admin')
    const user_id = req.data.user_id;
    connection.query('SELECT * FROM companies;',
    (err, rows, field) => {
        if(!err){
            res.json(rows);
        } else {
            res.json('informacion no valida')
            console.log(err);
        }
    })
})

router.post('/company', verifyToken, (req, res) => {
    const {company_id} = req.body;
    connection.query('SELECT * FROM shipments WHERE company_id=? AND active=1',
    [company_id],
    (err, rows, field) => {
        if(!err && rows.length > 0){
            res.json(rows);
        } else {
            res.json('informacion no valida')
            console.log(err);
        }
    })
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