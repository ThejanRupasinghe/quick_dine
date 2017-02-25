// exposed = Router.group();

//TODO: signIn group
// signedIn = FlowRouter.group([
//     triggersEnter: function () {
//         if(Meteor.userId()){
//             route = FlowRouter.current();
//         }else{
//             FlowRouter.go('signin');
//         }
//     }
// ]);

Router.route('/signin',{
    name: 'signin',
    onBeforeAction: function () {
        $('body').addClass("hold-transition login-page");
        $('head').html('<meta charset="utf-8">');
        $('head').append('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
        // <!-- Tell the browser to be responsive to screen width -->
        $('head').append('<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">');
        // <!-- Bootstrap 3.3.6 -->
        $('head').append('<link rel="stylesheet" href="/admin/bootstrap/css/bootstrap.min.css">');
        // <!-- Font Awesome -->
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">');
        // <!-- Ionicons -->
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">');
        // <!-- Theme style -->
        $('head').append('<link rel="stylesheet" href="/admin/dist/css/AdminLTE.min.css">');
        // <!-- AdminLTE Skins. -->
        $('head').append('<link rel="stylesheet" href="/admin/dist/css/skins/skin-yellow.min.css">');
        // <!-- iCheck -->
        $('head').append('<link rel="stylesheet" href="/admin/plugins/iCheck/flat/blue.css">');
        // <!-- Morris chart -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/morris/morris.css">');
        // <!-- jvectormap -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/jvectormap/jquery-jvectormap-1.2.2.css">');
        // <!-- Date Picker -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/datepicker/datepicker3.css">');
        // <!-- Daterange picker -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/daterangepicker/daterangepicker.css">')
        this.next();
    },
    action(){
        BlazeLayout.render('master_layout',{body: 'signin'});
    }
});

Router.route('/signup',{
    name: 'signup',
    action(){
        BlazeLayout.render('master_layout',{body: 'signup'});
    }
});

Router.route('/admin/dashboard',{
    name: 'admin_dashboard',
    onBeforeAction: function () {
        $('body').addClass("hold-transition skin-yellow sidebar-mini");

        $('head').html('<meta charset="utf-8">');
        $('head').append('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
        // <!-- Tell the browser to be responsive to screen width -->
        $('head').append('<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">');
        // <!-- Bootstrap 3.3.6 -->
        $('head').append('<link rel="stylesheet" href="/admin/bootstrap/css/bootstrap.min.css">');
        // <!-- Font Awesome -->
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">');
        // <!-- Ionicons -->
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">');
        // <!-- Theme style -->
        $('head').append('<link rel="stylesheet" href="/admin/dist/css/AdminLTE.min.css">');
        // <!-- AdminLTE Skins. -->
        $('head').append('<link rel="stylesheet" href="/admin/dist/css/skins/skin-yellow.min.css">');
        // <!-- iCheck -->
        $('head').append('<link rel="stylesheet" href="/admin/plugins/iCheck/flat/blue.css">');
        // <!-- Morris chart -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/morris/morris.css">');
        // <!-- jvectormap -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/jvectormap/jquery-jvectormap-1.2.2.css">');
        // <!-- Date Picker -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/datepicker/datepicker3.css">');
        // <!-- Daterange picker -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/daterangepicker/daterangepicker.css">');


        this.next();
    },
    onStop: function () {
        $('body').removeClass("hold-transition skin-yellow sidebar-mini");
    },
    action(){
        if(Meteor.userId()) {
            BlazeLayout.render('admin_index',{content: 'dashboard'});
        }else{
            BlazeLayout.render('master_layout',{body: 'no_access'});
        }
    }
});

Router.route('/admin/user_management',{
    name: 'admin_user_management',
    onBeforeAction: function () {
        $('body').addClass("hold-transition skin-yellow sidebar-mini");

        $('head').html('<meta charset="utf-8">');
        $('head').append('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
        // <!-- Tell the browser to be responsive to screen width -->
        $('head').append('<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">');
        // <!-- Bootstrap 3.3.6 -->
        $('head').append('<link rel="stylesheet" href="/admin/bootstrap/css/bootstrap.min.css">');
        // <!-- Font Awesome -->
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">');
        // <!-- Ionicons -->
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">');
        // <!-- Theme style -->
        $('head').append('<link rel="stylesheet" href="/admin/dist/css/AdminLTE.min.css">');
        // <!-- AdminLTE Skins. -->
        $('head').append('<link rel="stylesheet" href="/admin/dist/css/skins/skin-yellow.min.css">');
        // <!-- iCheck -->
        $('head').append('<link rel="stylesheet" href="/admin/plugins/iCheck/flat/blue.css">');
        // <!-- Morris chart -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/morris/morris.css">');
        // <!-- jvectormap -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/jvectormap/jquery-jvectormap-1.2.2.css">');
        // <!-- Date Picker -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/datepicker/datepicker3.css">');
        // <!-- Daterange picker -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/daterangepicker/daterangepicker.css">');

        this.next();
    },
    onStop: function () {
        $('body').removeClass("hold-transition skin-yellow sidebar-mini");
    },
    action(){
        if(Meteor.userId()) {
            BlazeLayout.render('admin_index',{content: 'user_management'});
        }else{
            BlazeLayout.render('master_layout',{body: 'no_access'});
        }
    }
});

Router.route('/waiter_index',{
    name: 'waiter_index',
    action(){
        console.log(Meteor.user());
        BlazeLayout.render('master_layout',{body: 'waiter_index'});
    }
});

Router.route('/cashier_index',{
    name: 'cashier_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'cashier_index'});
    }
});

Router.route('/kitchen_index',{
    name: 'kitchen_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'kitchen_index'});
    }
});

Router.route('/customer_index',{
    name: 'customer_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'customer_index'});
    }
});

Router.route('/loading',{
    name: 'loading',
    action(){
        BlazeLayout.render('master_layout');
    }
});
