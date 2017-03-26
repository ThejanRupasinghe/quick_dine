//TEMP VARIABLE FOR NEW ORDER
let new_order = {menuItems: []};
let clicked_item;

//NEW ORDER
Template.new_order.onCreated(function () {
    var self = this;

    //adding tableNo to the new_order temp object
    route = Router.current();
    new_order.tableNo = route.params.tableNo;

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
        var menuItemContainer = document.getElementById('menuItemContainer');
        menuItemContainer.innerHTML = '';
        Blaze.renderWithData(Template.menu_item_buttons,{id: Template.instance().data._id},menuItemContainer);
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

//MENU ITEM BUTTON
Template.menu_item_button.events({
    'click .numberButton': function(event){
        $("#numberDisplay").append(event.target.textContent.trim());
    },
    'click #addMenuItem': function(){
        let quantity = $("#numberDisplay").html();
        new_order.menuItems.push({name: clicked_item, quantity: quantity});
        $('#myModal').modal('hide');
        var itemListContainer = document.getElementById('itemListContainer');
        itemListContainer.innerHTML = '';
        Blaze.renderWithData(Template.item_list,{new_order: new_order, tableNo: new_order.tableNo},itemListContainer);
        console.log(new_order);
    },
    'click #menu_item_btn': function(){
        $('#myModal').modal('show');
        clicked_item = this.name;
    }
});
//----