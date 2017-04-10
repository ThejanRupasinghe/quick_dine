Router.route('/kitchen/home',{
    name: 'kitchen_home',
    onBeforeAction: function () {
        $('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/css/bootstrap.min.css">');

        this.next();
    },
    action(){
        if( (! Meteor.userId() )|| Meteor.user().profile.role !== "kitchen") {
            Router.go('signin');
        }else{
            BlazeLayout.render('kitchen_layout',{content: 'kitchen_home',order_list: 'order_list_kitchen'});
        }
    }
});
