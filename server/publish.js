Meteor.publish("users", function () {
    return Meteor.users.find({});
});

Meteor.publish("categories", function () {
    return Categories.find({});
});

Meteor.publish("itemForCategory", function (id) {
    return MenuItems.find({category: id});
});

Meteor.publish("menuItems", function (id) {
    return MenuItems.find({});
});