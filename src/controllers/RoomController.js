const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        // const db = await Database()
        const pass = req.body.password
        let roomId
        // let isRoom = true

                            for (var i = 0; i < 6; i++) {
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString()
        }
        
                            console.log(parseInt(roomId))
        
        
        res.redirect(`/room/${roomId}`)
    },

    open(req,res){
                                         const roomId = req.params.room
        res.render("room", {roomId: roomId})
    }
}
// while (isRoom) {
    //     // Gera o número da sala
    //     for (var i = 0; i < 6; i++) {
        //         i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
        //             roomId += Math.floor(Math.random() * 10).toString()
        //     }
        
        //     // Verifica se esse número já existe
        //     const roomsExistIds = await db.all(`SELECT id FROM rooms`)
        //     isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)
        
        //     if (!isRoom) {
            //         // Insere o Número da sala ao banco de dados
            //         console.log(parseInt(roomId))
            //             await db.run(`INSERT INTO rooms (
                //                 id,
                //                 pass
                //             ) VALUES (
                    //                 ${parseInt(roomId)},
                    //                 ${pass}
                    //             )`)
                    
                    // await db.close()
                    //         }
                    //     }
                    