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

FlowRouter.route('/home',{
    name: 'home',
    action(){
        BlazeLayout.render('master_layout',{body: 'home'});
    }
});