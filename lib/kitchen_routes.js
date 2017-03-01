Router.route('/kitchen_index',{
    name: 'kitchen_index',
    action(){
        BlazeLayout.render('master_layout',{body: 'kitchen_index'});
    }
});
