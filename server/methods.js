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
    addMenuItemFromAdmin: function (name,category,unit_price) {
        if(MenuItems.findOne({name: name, category: category})){
            throw new Meteor.Error("not-unique", "This food item has added before");
        }else{
            MenuItems.insert({
                name: name,
                category: category,
                unit_price: unit_price,
                inMenu: true,
                CreatedAt: new Date()
            });
        }
    }
});