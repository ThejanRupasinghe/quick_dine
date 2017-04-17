Router.route('/cashier/home',{
    name: 'cashier_home',
    onBeforeAction: function () {
        $('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/css/bootstrap.min.css">');

        this.next();
    },
    action(){
        if( (! Meteor.userId() )|| Meteor.user().profile.role !== "cashier") {
            Router.go('signin');
        }else{
            BlazeLayout.render('cashier_layout',{content: 'cashier_home', order_list: 'order_list_cashier'});
        }
    }
});