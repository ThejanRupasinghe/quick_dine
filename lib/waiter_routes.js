Router.route('/waiter/home',{
    name: 'waiter_home',
    onBeforeAction: function () {
        $('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/css/bootstrap.min.css">');

        this.next();
    },
    action(){
        BlazeLayout.render('waiter_layout',{content: 'waiter_home'});
    }
});

Router.route('/waiter/new_order',{
    name: 'waiter_new_order',
    onBeforeAction: function () {
        $('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/css/bootstrap.min.css">');

        this.next();
    },
    action(){
        BlazeLayout.render('waiter_layout',{content: 'select_table'});
    }
});

Router.route('/waiter/new_order/:tableNo',{
    name: 'waiter_table_no',
    onBeforeAction: function () {
        $('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/css/bootstrap.min.css">');

        this.next();
    },
    action(){
        BlazeLayout.render('waiter_layout',{content: 'new_order', tableNo: this.params.tableNo});
    }
});