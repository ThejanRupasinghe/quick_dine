Meteor.publish("users", function () {
    return Meteor.users.find({});
});

Meteor.publish("categories", function () {
    return Categories.find({});
});