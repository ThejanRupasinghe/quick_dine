Template.signup.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
        FlowRouter.go('home');
    }
});

Template.nav_bar.events({
    'click .signout': function(event){
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go('signin');
    }
});

Template.signin.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password);
        FlowRouter.go('home');
    }
});

