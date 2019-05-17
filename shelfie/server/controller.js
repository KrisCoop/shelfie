let id = 1
let products = [];

module.exports = {
    get: function(req, res){  
        const db = req.app.get('db');
        db.GET_INVENTORY()
            .then((products)=>{
                res.status(200).send(products)
            });
    }
}