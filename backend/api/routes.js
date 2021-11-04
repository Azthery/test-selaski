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
                res.json({token, rows});
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

    connection.query(
    `SELECT c.*, COUNT(shipment_id) AS c_shipments, c_containers
    FROM companies as c 
    LEFT JOIN shipments as s
        on c.company_id = s.company_id
    WHERE user_id =?
    GROUP BY company_id;`,
    [user_id],
    (err, rows, field) => {
        if(!err){
            res.json(rows);
        } else {
            res.json('info invalid')
            console.log(err);
        }
    })
})

router.post('/all_companies', verifyToken, (req, res) => {
    connection.query(
    `SELECT c.*, COUNT(shipment_id) AS c_shipments, c_containers
    FROM companies as c 
    LEFT JOIN shipments as s
        on c.company_id = s.company_id
    GROUP BY company_id;`,
    (err, rows, field) => {
        if(!err){
            res.json(rows);
        } else {
            res.json('info invalid')
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
            res.json('info invalid')
            console.log(err);
        }
    })
})

// router.post('/companiesnames', verifyToken, (req, res) => {
//     connection.query('SELECT company_id, name FROM companies;',
//     (err, rows, field) => {
//         if(!err && rows.length > 0){
//             res.json(rows);
//         } else {
//             res.json('info invalid')
//             console.log(err);
//         }
//     })
// })

router.post('/editcompany', verifyToken, (req, res) => {
    const {name, rut, contact_name, contact_email, company_id} = req.body;

    connection.query(`UPDATE companies 
    SET 
    name = "${name}",
    rut = "${rut}",
    contact_email = "${contact_email}",
    contact_name = "${contact_name}"
    WHERE company_id = 1
    LIMIT 1;`,

    (err, rows, field) => {
        if(!err){
            res.json(rows);
        } else {
            res.json('info invalid')
            console.log(err);
        }
    })
})

router.post('/createshipment', verifyToken, (req, res) => {
    let {company_id, c_containers} = req.body;

    connection.query(
    `INSERT INTO shipments (c_containers, company_id) 
    VALUES(
        ?,
        ?);`,
    [c_containers, company_id],

    (err, rows, field) => {
        if(!err){
            console.log('Shipment added!')
            res.json(rows);
        } else {
            res.json('info invalid')
            console.log(err);
        }
    })
})

router.post('/editcompany', verifyToken, (req, res) => {
    const {name, rut, contact_name, contact_email, company_id} = req.body;

    connection.query(`UPDATE companies 
    SET 
    name = "${name}",
    rut = "${rut}",
    contact_email = "${contact_email}",
    contact_name = "${contact_name}"
    WHERE company_id = 1
    LIMIT 1;`,

    (err, rows, field) => {
        if(!err){
            res.json(rows);
        } else {
            res.json('info invalid')
            console.log(err);
        }
    })
})

router.post('/updatestatusship', verifyToken, (req, res) => {
    const {finshed, shipment_id} = req.body;
    connection.query(
    `UPDATE shipments 
    SET 
    finshed =?,
    updated_at = CURRENT_TIMESTAMP
    WHERE shipment_id =?
    LIMIT 1;`,
    [finshed, shipment_id],
    (err, rows, field) => {
        if(!err){
            res.json('Status shipment updated!');
        } else {
            res.json('info invalid')
            console.log(err);
        }
    })
})

router.post('/loot', verifyToken, (req, res) => {
    const {company_id} = req.body;
    connection.query(`SELECT SUM(c_containers) AS total_gain
    FROM shipments
    WHERE company_id =? ;`,
    [company_id],
    (err, rows, field) => {
        if(!err && rows.length > 0){
            res.json(rows);
        } else {
            res.json('info invalid')
            console.log(err);
        }
    })
})

router.post('/get_a_company', verifyToken, (req, res) => {
    const {user_id, company_id} = req.body;
    connection.query(`
    UPDATE companies 
    SET 
    user_id =?
    WHERE company_id =?
    LIMIT 1;
    `,
    [user_id, company_id],
    (err, rows, field) => {
        if(!err){
            res.json(rows);
        } else {
            res.json('info invalid')
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