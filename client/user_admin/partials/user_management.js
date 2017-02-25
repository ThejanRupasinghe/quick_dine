Template.user_management.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('users');
    });
});

Template.user_management.helpers({
    users: ()=>{
        return Meteor.users.find({});
    }
});

Template.user_management.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var role = $('[name=role]').val();

        // TODO: add validations
        Accounts.createUser({
            email: email,
            password: password,
            profile : {
                role: role
            }
        });
    }
});