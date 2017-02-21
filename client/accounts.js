// Template.signin.onCreated(function () {
//     var self = this;
//     self.autorun(function () {
//         self.subscribe('users');
//     });
// });

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
            Router.go('waiter_index');
        }else if(role==='cashier') {
            Router.go('cashier_index');
        }else if(role==='kitchen') {
            Router.go('kitchen_index');
        }else if(role==='customer') {
            Router.go('customer_index');
        }else{Router.go('admin_index');
        }
    }
});

Template.nav_bar.events({
    'click .signout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('signin');
    }
});

Template.signin.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        // TODO: add validations
        Meteor.loginWithPassword(email, password,function (error) {
            if(error !== undefined){
                Template.signin.helpers({
                    error: error.reason
                });
                console.log(error.reason);
            }else{
                var role = Meteor.user().profile.role;

                if(role==='waiter'){
                    Router.go('waiter_index');
                }else if(role==='cashier') {
                    Router.go('cashier_index');
                }else if(role==='kitchen') {
                    Router.go('kitchen_index');
                }else if(role==='customer') {
                    Router.go('customer_index');
                }else{
                    Router.go('admin_index');
                }
            }
        });
    }
});


