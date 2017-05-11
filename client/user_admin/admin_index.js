Template.nav_bar_admin.events({
    'click #signout': function(event){
        event.preventDefault();
        Meteor.logout(function () {
            Router.go('signin');
        });
    }
});

Template.admin_index.onRendered(function () {
    $.getScript("/admin/dist/js/app.min.js");
});

Template.dashboard.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('users');
        self.subscribe('orders');
    });
});