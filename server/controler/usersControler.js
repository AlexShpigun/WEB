
const bcrypt = require('bcrypt')
const db = require('../db')
const {validationResult} = require('express-validator')

class UsersControler{
    async register(req, res){
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({massage: 'error during validation'})
        }
        const {email, password, name} = req.body
        if(!email || !password || ! name){
            return res.status(403).send("error: not enough data");
        }
        db.query("SELECT COUNT(*) as count FROM client WHERE client.email = $1 OR client.name = $2",[email,name],function(err, rows){

            if(err) {
                console.log(err);
                return;
            }

            if (rows.rows[0].count!= 0){
                console.log('hui');
                return res.status(402).json("error: already exists");

            }
            const hashPassword =  bcrypt.hashSync(password, 5);
            db.query("INSERT INTO client (email, name,password) VALUES ($1,$2,$3)",[email,name, hashPassword])
            db.query("SELECT c.* FROM  client c WHERE c.email = $1",[email],function (error, data){
                if(error) {
                    console.log(error);
                    return;
                }

                res.json(data.rows[0])
            })

        })

    }

    async login(req, res){
        const {email, password} = req.body
        if(!email || !password){
            return res.status(403).send("error: not enough data");
        }
        db.query("SELECT c.* FROM client c WHERE c.email = $1",[email],function(err, rows){
            console.log(rows)
            console.log(rows.rows)
            if(err) {
                console.log(err);
                return;
            }
            if(rows.rowCount == 0){
                return res.status(400).send("error: no email");
            }

            let comparePassword = bcrypt.compareSync(password, rows.rows[0].password)
            if(!comparePassword){
                return res.status(400).send("error: incorrect password ");
            }
            res.json(rows.rows[0])




        })

    }


}
module.exports = new UsersControler()