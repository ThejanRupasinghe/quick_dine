//TEMP VARIABLE FOR NEW ORDER
let new_order = {};

//NEW ORDER
Template.new_order.onCreated(function () {
    var self = this;

    //adding tableNo to the new_order temp object
    route = Router.current();
    new_order.tableNo = route.params.tableNo;
    console.log(new_order);

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
        var myContainer = document.getElementById('myContainer');
        myContainer.innerHTML = '';
        Blaze.renderWithData(Template.menu_item_buttons,{id: Template.instance().data._id},myContainer);
    }
});
//----

//MENU ITEM BUTTONS
Template.menu_item_buttons.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('itemsForCategory',Template.instance().data.id);
    });
});

Template.menu_item_buttons.helpers({
    itemsForCategory: ()=>{
        return MenuItems.find({category: Template.instance().data.id, inMenu: true});
    }
});
//----