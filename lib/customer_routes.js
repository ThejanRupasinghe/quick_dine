Router.route('/customer_index',{
    name: 'customer_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'customer_index'});
    }
});