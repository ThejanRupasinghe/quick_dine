// ****STATUS CODE FOR ORDERS****
// 0 - NOT READY
// 1 - COOKING
// 2 - READY
// 3 - SERVED
// 4 - BILLED
// *****************************

Meteor.methods({
    getUser : function() {
        var userRec = {};
        if (Meteor.userId()) {
            userRec = Meteor.user();
        }
        return 1;
    },
    createUserFromAdmin:function(username,password,role,name){
        Accounts.createUser({
            username: username,
            password: password,
            profile : {
                role: role,
                name: name
            }
        });
    },
    deleteUserFromAdmin:function(id){
        Meteor.users.remove({_id: id});
    },
    updateUserFromAdmin:function (id,password,role,name) {
        if (!(password==="")){
            Accounts.setPassword(id,password);
        }
        Meteor.users.update(id, {$set: {"profile.role": role, "profile.name": name}});
    },
    seedCategories: function () {
        Categories.insert({name: 'Breakfast'});
        Categories.insert({name: 'Lunch'});
        Categories.insert({name: 'Dinner'});
        Categories.insert({name: 'Dessert'});
        Categories.insert({name: 'Drinks'});
        Categories.insert({name: 'Short Eats'});
        Categories.insert({name: 'Others'});
    },
    addMenuItemFromAdmin: function (name,category,unit_price,item_picture) {
        if(MenuItems.findOne({name: name, category: category})){
            throw new Meteor.Error("not-unique", "This food item has added before");
        }else{
            MenuItems.insert({
                name: name,
                category: category,
                unit_price: unit_price,
                item_picture: item_picture,
                inMenu: true
            });
        }
    },
    updateMenuItemFromAdmin:function (id,name,category,unit_price,item_picture) {
        if(name==null){
            if(item_picture==null){
                MenuItems.update(id,{$set: {"unit_price": unit_price}});
            }else{
                MenuItems.update(id,{$set: {"unit_price": unit_price, "item_picture": item_picture}});
            }
        }else{
            if(MenuItems.findOne({name: name, category: category})){
                throw new Meteor.Error("not-unique", "This food item has added before");
            }else{
                if(item_picture==null){
                    MenuItems.update(id, {$set: {"name": name, "category": category, "unit_price": unit_price}});
                }else{
                    MenuItems.update(id, {$set: {"name": name, "category": category, "unit_price": unit_price, "item_picture": item_picture}});
                }
            }
        }
    },
    removeItemMenuFromAdmin:function(id){
        MenuItems.update(id, {$set: {"inMenu": false}});
    },
    addItemToMenuFromAdmin:function(id){
        MenuItems.update(id, {$set: {"inMenu": true}});
    },
    addOrderFromWaiter:function (tableNo, menuItems, waiterId) {
        Orders.insert({
            tableNo: tableNo,
            menuItems: menuItems,
            status: 0,
            waiterId: waiterId
        });
    },
    changeOrderStatus: function (id, status) {
        Orders.update(id, {$set: {status: status}});
    },
    addBillFromCashier: function(orderId, billNo, total, payment, balance, cashierId){
        Bills.insert({
            orderId: orderId,
            billNo: billNo,
            total: total,
            payment: payment,
            balance: balance,
            cashierId: cashierId
        });
    },
    addRateFromCustomer: function(rate_no){
        Rates.insert({
            rate_no: rate_no
        });
    }
    // findItemName: function (item_id) {
    //     console.log(item_id);
    //     let menuItem = MenuItems.findOne({_id: item_id},{fields : {name:1}});
    //     console.log(menuItem);
    //     return menuItem.name;
    // }
});