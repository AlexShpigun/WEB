
const bcrypt = require('bcrypt')
const db = require('../db')

class UsersControler{
    async register(req, res){
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

    }
    async check(req, res){
        res.send('-')

    }

}
module.exports = new UsersControler()