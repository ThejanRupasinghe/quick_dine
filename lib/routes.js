exposed = FlowRouter.group();

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

exposed.route('/signin',{
    name: 'signin',
    action(){
        BlazeLayout.render('master_layout',{body: 'signin'});
    }
});

exposed.route('/signup',{
    name: 'signup',
    action(){
        BlazeLayout.render('master_layout',{body: 'signup'});
    }
});

FlowRouter.route('/admin_index',{
    name: 'admin_index',
    action(){
        if(Meteor.userId()) {
            BlazeLayout.render('master_layout', {body: 'admin_index'});
        }else{
            BlazeLayout.render('master_layout',{body: 'no_access'});
        }
    }
});

FlowRouter.route('/waiter_index',{
    name: 'waiter_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'waiter_index'});
    }
});

FlowRouter.route('/cashier_index',{
    name: 'cashier_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'cashier_index'});
    }
});

FlowRouter.route('/kitchen_index',{
    name: 'kitchen_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'kitchen_index'});
    }
});

FlowRouter.route('/customer_index',{
    name: 'customer_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'customer_index'});
    }
});