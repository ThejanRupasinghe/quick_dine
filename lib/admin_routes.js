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
        if( (! Meteor.userId() )|| Meteor.user().profile.role !== "admin") {
            Router.go('signin');
        }else{
            BlazeLayout.render('admin_index',{content: 'dashboard'});
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
        if((! Meteor.userId() )|| Meteor.user().profile.role !== "admin") {
            Router.go('signin');
        }else{
            BlazeLayout.render('admin_index',{content: 'user_management',form: 'user_add_form'});
        }
    }
});

Router.route('/admin/edit_user/:id',{
    name: 'admin_user_edit',
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
        if((! Meteor.userId() )|| Meteor.user().profile.role !== "admin") {
            Router.go('signin');
        }else{
            var user = Meteor.users.findOne({_id: this.params.id});
            BlazeLayout.render('admin_index',{content: 'user_management',form: 'user_edit_form',data: user});
        }
    }
});

Router.route('/admin/menu_management/edit_menu_items',{
    name: 'admin_menu_edit',
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
        if((! Meteor.userId() )|| Meteor.user().profile.role !== "admin") {
            Router.go('signin');
        }else{
            BlazeLayout.render('admin_index',{content: 'edit_menu_items'});
        }
    }
});

Router.route('/admin/menu_management/add_menu_items',{
    name: 'admin_menu_add',
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
        if((! Meteor.userId() )|| Meteor.user().profile.role !== "admin") {
            Router.go('signin');
        }else{
            BlazeLayout.render('admin_index',{content: 'add_menu_items'});
        }
    }
});

Router.route('/admin/edit_menu_item/:id',{
    name: 'admin_menu_item_edit',
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

        if((! Meteor.userId() )|| Meteor.user().profile.role !== "admin") {
            Router.go('signin');
        }else{
            var menuItem = MenuItems.findOne({_id: this.params.id});
            var category = Categories.findOne({_id: menuItem.category});
            BlazeLayout.render('admin_index',{content: 'edit_item_form',menuItem: menuItem,category: category});
        }
    }
});
