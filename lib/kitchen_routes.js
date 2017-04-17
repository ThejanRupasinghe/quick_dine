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

Router.route('/kitchen/view_order/:_id',{
    name: 'kitchen_view_order',
    onBeforeAction: function () {
        $('head').html('<meta charset="utf-8">');
        $('head').append('<link rel="stylesheet" href="/css/bootstrap.min.css">');

        this.next();
    },
    action: function () {

        if( (! Meteor.userId() )|| Meteor.user().profile.role !== "kitchen") {
            Router.go('signin');
        }else{

        var order = Orders.findOne({_id: this.params._id});
            console.log("hey");
            BlazeLayout.render('kitchen_layout', {content: 'kitchen_view_order', data: order});
        }

    }
});


