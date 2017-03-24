//some variables
let category_id;

//NEW ORDER
Template.new_order.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('categories');
    });
});

Template.new_order.helpers({
    categories: ()=>{
        return Categories.find({});
    }
});
//----

//CATEGORY BUTTON
Template.category_button.events({
    'click #category_btn': function(){
        category_id=Template.instance().data._id;
        console.log(category_id);
        BlazeLayout.render('waiter_layout',{content: 'new_order', id: Template.instance().data._id, menuItems: 'menu_item_buttons'});
    }
});
//----

//MENU ITEM BUTTONS
Template.menu_item_buttons.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('menuItems');
    });
});

Template.menu_item_buttons.helpers({
    menuItems: ()=>{
        console.log(category_id);
        return MenuItems.find({inMenu: true});
    }
});
//----

