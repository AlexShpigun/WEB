const db = require('../db')

class AnimeControler{

    async getYourAnimes(req, res){
        const {id} = req.body
        if(!id){
            return res.status(403).send("error: not enough data");
        }
        db.query("SELECT a.id, a.name, ca.progress, st.type, r.type, s.name, a.score, a.series, a.picture, a.description\n" +
            "FROM clientanime ca\n" +
            "JOIN anime a ON a.id = ca.anime_id\n" +
            "JOIN status st ON st.id = ca.status_id\n" +
            "JOIN studio s on a.studio_id = s.id\n" +
            "JOIN rating r on a.rating_id = r.id\n" +
            "WHERE ca.client_id = $1;",[id],function(err, rows){
            console.log(rows)
            console.log(rows.rows)
            if(err) {
                console.log(err);
                return;
            }
            res.json(rows.rows)
        })
    }

}
module.exports = new AnimeControler()