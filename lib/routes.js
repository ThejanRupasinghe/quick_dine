FlowRouter.route('/signin',{
    name: 'signin',
    action(){
        BlazeLayout.render('master_layout',{body: 'signin'});
    }
});