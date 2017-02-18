Template.signup.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var role = $('[name=role]').val();
        Accounts.createUser({
            email: email,
            password: password,
            profile : {
                role: role
            }
        });
        if(Meteor.user().profile.role=='waiter'){
            FlowRouter.go('waiter_index')
        }
        FlowRouter.go('admin_index');
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
        console.log(Meteor.user().profile.role);
        if(Meteor.user().profile.role=='waiter'){
            FlowRouter.go('waiter_index')
        }
        FlowRouter.go('admin_index');
    }
});


