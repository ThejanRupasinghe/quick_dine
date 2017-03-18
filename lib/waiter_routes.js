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