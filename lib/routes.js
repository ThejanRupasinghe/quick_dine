FlowRouter.route('/signin',{
    name: 'signin',
    action(){
        BlazeLayout.render('master_layout',{body: 'signin'});
    }
});

FlowRouter.route('/signup',{
    name: 'signup',
    action(){
        BlazeLayout.render('master_layout',{body: 'signup'});
    }
});

FlowRouter.route('/admin_index',{
    name: 'admin_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'admin_index'});
    }
});

FlowRouter.route('/waiter_index',{
    name: 'waiter_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'waiter_index'});
    }
});