const sqlite3 = require('sqlite3').verbose();
let db = '';


module.exports = {

    abrirDB:  function () {
        db = new sqlite3.Database('./recursos/bingo.db');

    },

    insertar: function (canal, msg) {
        try {
            db.run('INSERT INTO bingoTable(canal,valor,fecha) VALUES(?,?,?)', [canal, msg, Date.now()], function (err) {
                if (err) {
                    return console.log(err.message);
                }
            });
        } catch (error) { };
    },

    cerrarDB: function () {
       try{
        db.close();
       }
        catch(err){}
    }
}

