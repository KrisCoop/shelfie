let id = 1
let products = [];

module.exports = {
    get: function(req, res){  
        const db = req.app.get('db');
        db.GET_INVENTORY()
            .then((products)=>{
                res.status(200).send(products)
            });
    },

    add: function(req, res){
        const {name, price, photo} = req.body;
        const db = req.app.get('db');
        db.CREATE_PRODUCT([name, price, photo])
            .then( (products) => {
                res.status(200).send(products)
            })
            .catch( err => {
                console.log(`sorry, that is wrong ${err}`);
            })
    }
}