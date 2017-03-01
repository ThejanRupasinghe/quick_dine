Router.route('/waiter_index',{
    name: 'waiter_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'waiter_index'});
    }
});