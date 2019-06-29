const fs = require('fs');

module.exports = {
    addItemPage: (req, res) => {
        res.render('add-item.ejs', {
            title: "Welcome to Questronix Inventory | Add an item entry"
            ,message: ''
        });
    },
    addItem: (req, res) => {
        let message = '';
        let item_name = req.body.item_name;
        let item_qty = req.body.item_qty;
        let item_amt = req.body.item_amt; 
                // send the player's details to the database
                let query = "INSERT INTO `items` (name, qty, amount) VALUES ('" + item_name + "', '" + item_qty + "', '" + item_amt + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
    },
    editItemPage: (req, res) => {
        let itemID = req.params.id;
        let query = "SELECT * FROM `items` WHERE id = '" + itemID + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-item.ejs', {
                title: "Edit  Item Entry"
                ,player: result[0]
                ,message: ''
            });
        });
    },
    editItem: (req, res) => {
        let itemID = req.params.id;
        let item_name = req.body.item_name;
        let item_qty = req.body.item_qty;
        let item_amt = req.body.item_amt;

        let query = "UPDATE `items` SET `name` = '" + item_name + "', `qty` = '" + item_qty + "', `item_amt` = '" + amount + "' WHERE `players`.`id` = '" + itemID + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deleteItem: (req, res) => {
        let itemID = req.params.id;
        let deleteUserQuery = 'DELETE FROM items WHERE id = "' + itemID + '"';
                if (err) {
                    return res.status(500).send(err);
                }
                else{
                    db.query(deleteUserQuery, (err, result) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        res.redirect('/');
                    });
                }
                
    }
};
