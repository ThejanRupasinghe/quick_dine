Router.route('/customer_login',{
    name: 'customer_login',
    onBeforeAction: function () {
        $('body').addClass("hold-transition login-page");
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

Router.route('/customer_home/:tableNo',{
    name: 'customer_home',
    onBeforeAction: function () {
        $('head').append('<link rel="stylesheet" href="/admin/bootstrap/css/bootstrap.min.css">');
        $('head').append('<link rel="stylesheet" href="/css/customer_style.css" type="text/css" media="all" />');
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">');

    	$.getScript("/js/jquery.vide.min.js");

        this.next();
    },
    onStop: function () {
        $('body').removeClass("hold-transition login-page");
    },
    action(){
        BlazeLayout.render('customer_home');
    }
});