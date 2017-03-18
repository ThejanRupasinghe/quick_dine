Template.waiter_home.events({
    "click #new_order": function () {
        BlazeLayout.render('waiter_layout',{content: 'select_table'});
    }
});
