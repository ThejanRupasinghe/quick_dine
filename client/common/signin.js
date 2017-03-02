// Template.signin.onCreated(function () {
//     var self = this;
//     self.autorun(function () {
//         self.subscribe('users');
//     });
// });

Template.signup.events({
    'submit form': function(event){
        event.preventDefault();
        var name = $('[name=name]').val();
        var username = $('[name=username]').val();
        var password = $('[name=password]').val();
        var role = $('[name=role]').val();

        // TODO: add validations
        Accounts.createUser({
            username: username,
            password: password,
            profile : {
                role: role,
                name : name
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
        }else{Router.go('admin_dashboard');
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
        var username = $('[name=username]').val();
        var password = $('[name=password]').val();

        Meteor.loginWithPassword(username, password,function (error) {
            if(error !== undefined){
                $('#helper_text').html(error.reason);
                $('#username_group').addClass("has-error");
                $('#password_group').addClass("has-error");
                $('[name=username]').val("");
                $('[name=password]').val("");
                $('[name=username]').focus();
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
                    Router.go('admin_dashboard');
                }
            }
        });
    }
});



