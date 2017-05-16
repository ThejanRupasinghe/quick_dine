Router.route('/customer/login',{
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
        BlazeLayout.render('customer_home',{tableNo: this.params.tableNo});
    }
});

Router.route('/customer/menu/:tableNo',{
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
        BlazeLayout.render('customer_menu',{tableNo: this.params.tableNo});
    }
});

Router.route('/customer/rate_page/:tableNo',{
    name: 'customer_rate_page',
    onBeforeAction: function () {
    	$('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/admin/bootstrap/css/bootstrap.min.css">');
        $('head').append('<link rel="stylesheet" href="/css/customer_style.css" type="text/css" media="all" />');
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">');

        $('body').attr("background", "/images/rateback.png");

        this.next();
    },
    onStop: function () {
    	$('body').attr("background", "");
    },
    action(){
        BlazeLayout.render('customer_rate',{tableNo: this.params.tableNo});
    }
});

Router.route('/customer/rate/:tableNo/:rateNo',{
    name: 'customer_rate',
    onBeforeAction: function () {
    	$('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/admin/bootstrap/css/bootstrap.min.css">');
        $('head').append('<link rel="stylesheet" href="/css/customer_style.css" type="text/css" media="all" />');
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">');

        $('body').attr("background", "/images/rateback.png");

        this.next();
    },
    onStop: function () {
    	$('body').attr("background", "");
    },
    action(){
    	rate_no = this.params.rateNo;
    	Meteor.call('addRateFromCustomer', rate_no);
    	Router.go('customer_thank',{tableNo: this.params.tableNo});
    }
});

Router.route('/customer/thank/:tableNo',{
    name: 'customer_thank',
    onBeforeAction: function () {
    	$('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/admin/bootstrap/css/bootstrap.min.css">');
        $('head').append('<link rel="stylesheet" href="/css/customer_style.css" type="text/css" media="all" />');
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">');

        $('body').attr("background", "/images/rateback.png");

        this.next();
    },
    onStop: function () {
    	$('body').attr("background", "");
    },
    action(){
    	BlazeLayout.render('customer_thank',{tableNo: this.params.tableNo});
    }
});