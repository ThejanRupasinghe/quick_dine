Router.route('/custome/login',{
    name: 'customer_login',
    onBeforeAction: function () {
        $('body').addClass("hold-transition login-page");
        $('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/admin/bootstrap/css/bootstrap.min.css">');
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">');
        $('head').append('<link rel="stylesheet" href="/admin/dist/css/AdminLTE.min.css">');
        $('head').append('<link rel="stylesheet" href="/admin/dist/css/skins/skin-yellow.min.css">');

        this.next();
    },
    onStop: function () {
        $('body').removeClass("hold-transition login-page");
    },
    action(){
        BlazeLayout.render('customer_layout',{content: 'customer_login'});
    }
});

Router.route('/customer/home/:tableNo',{
    name: 'customer_home',
    onBeforeAction: function () {
        $('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/admin/bootstrap/css/bootstrap.min.css">');
        $('head').append('<link rel="stylesheet" href="/css/customer_style.css" type="text/css" media="all" />');
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">');

        $('body').attr("background", "/images/cook.jpg");

        this.next();
    },
    onStop: function () {
        $('body').attr("background", "");
    },
    action(){
        BlazeLayout.render('customer_home');
    }
});

Router.route('/customer/menu',{
    name: 'customer_menu',
    onBeforeAction: function () {
    	$('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/admin/bootstrap/css/bootstrap.min.css">');

        $('body').attr("background", "/images/menu_back.jpg");

        this.next();
    },
    onStop: function () {
    	$('body').attr("background", "");
    },
    action(){
        BlazeLayout.render('customer_menu');
    }
});