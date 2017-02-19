Meteor.subscribe('users');

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
        if(role==='waiter'){
            FlowRouter.go('waiter_index')
        }else{
            FlowRouter.go('admin_index');
        }
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
        // TODO: add validations
        var role = Meteor.users.findOne({ "emails.address" : email }).profile.role;

        Meteor.loginWithPassword(email, password);

        if(role==='waiter'){
            console.log('in');
            FlowRouter.go('waiter_index');
        }else{
            FlowRouter.go('admin_index');
        }
    }
});


