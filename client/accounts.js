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
                alert(error.reason);
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

Meteor.startup(function () {
    // <!-- jQuery 2.2.3 -->
    $.getScript("/admin/plugins/jQuery/jquery-2.2.3.min.js");
    // <!-- jQuery UI 1.11.4 -->
    $.getScript("https://code.jquery.com/ui/1.11.4/jquery-ui.min.js");
    // <!-- Bootstrap 3.3.6 -->
    $.getScript("/admin/bootstrap/js/bootstrap.min.js");
    // <!-- Morris.js charts -->
    // $.getScript("https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js");
    // $.getScript("/admin/plugins/morris/morris.min.js");
    // <!-- Sparkline -->
    // $.getScript("/admin/plugins/sparkline/jquery.sparkline.min.js");
    // <!-- jvectormap -->
    // $.getScript("/admin/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js");
    // $.getScript("/admin/plugins/jvectormap/jquery-jvectormap-world-mill-en.js");
    // <!-- jQuery Knob Chart -->
    // $.getScript("/admin/plugins/knob/jquery.knob.js");
    // <!-- daterangepicker -->
    // $.getScript("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js");
    // $.getScript("/admin/plugins/daterangepicker/daterangepicker.js");
    // <!-- datepicker -->
    // $.getScript("/admin/plugins/datepicker/bootstrap-datepicker.js");
    // <!-- Slimscroll -->
    $.getScript("/admin/plugins/slimScroll/jquery.slimscroll.min.js");
    // <!-- FastClick -->
    $.getScript("/admin/plugins/fastclick/fastclick.js");
    // <!-- AdminLTE App -->
    $.getScript("/admin/dist/js/app.min.js");
});

