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





