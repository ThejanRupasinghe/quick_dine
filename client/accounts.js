Template.signin.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('users');
    });
});

Template.signup.events({
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
        if(role==='waiter'){
            FlowRouter.go('waiter_index');
        }else if(role==='cashier') {
            FlowRouter.go('cashier_index');
        }else if(role==='kitchen') {
            FlowRouter.go('kitchen_index');
        }else if(role==='customer') {
            FlowRouter.go('customer_index');
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
        Meteor.loginWithPassword(email, password);

        var role = Meteor.users.findOne({ "emails.address" : email }).profile.role;

        if(role==='waiter'){
            FlowRouter.go('waiter_index');
        }else if(role==='cashier') {
            FlowRouter.go('cashier_index');
        }else if(role==='kitchen') {
            FlowRouter.go('kitchen_index');
        }else if(role==='customer') {
            FlowRouter.go('customer_index');
        }else{
            FlowRouter.go('admin_index');
        }
    }
});


