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

Meteor.publish("ordersByWaiter",function (status, waiterId) {
    if(status==null){
        return Orders.find({waiterId: waiterId});
    }else{
        return Orders.find({status: status, waiterId: waiterId});
    }
});

Meteor.publish("orders", function () {
    return Orders.find({});
});

Meteor.publish("ordersByStatus",function (status) {
    //TODO: Reverse the order list
    if(status==null){
        return Orders.find({});
    }else{
        return Orders.find({status: status});
    }
});

Meteor.publish("rates", function () {
    return Rates.find({});
});