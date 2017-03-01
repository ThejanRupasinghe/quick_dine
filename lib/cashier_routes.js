Router.route('/cashier_index',{
    name: 'cashier_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'cashier_index'});
    }
});