Meteor.publish("users", function () {
    return Meteor.users.find({});
});

Meteor.publish("categories", function () {
    return Categories.find({});
});

Meteor.publish("itemsForCategory", function (id) {
    return MenuItems.find({category: id, inMenu: true});
});

Meteor.publish("menuItems", function () {
    return MenuItems.find({});
});

Meteor.publish("orders",function (status, waiterId) {
    if(status==null){
        return Orders.find({waiterId: waiterId});
    }else{
        return Orders.find({status: status, waiterId: waiterId});
    }
});