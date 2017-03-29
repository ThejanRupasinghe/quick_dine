//TEMP VARIABLE FOR NEW ORDER
let new_order = {menuItems: []};
let clicked_item;

// ****STATUS CODE FOR ORDERS****
// 0 - NOT READY
// 1 - COOKING
// 2 - READY
// 3 - SERVED
// 4 - BILLED
// *****************************

//WAITER HOME
Template.waiter_home.events({
    'click #newOrder': function () {
        Router.go('waiter_new_order');
    },
    'click #allOrders': function () {
        var orderListContainer = document.getElementById('orderListContainer');
        orderListContainer.innerHTML = '';
        Blaze.renderWithData(Template.order_list,{status: null},orderListContainer);
    },
    'click #notReadyOrders': function () {
        var orderListContainer = document.getElementById('orderListContainer');
        orderListContainer.innerHTML = '';
        Blaze.renderWithData(Template.order_list,{status: 5},orderListContainer);
    },
    'click #readyOrders': function () {
        
    }
});
//----

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
    'click .clearButton': function () {
        $('#numberDisplay').html('');
    },
    'click #addMenuItem': function(){
        let quantity = parseInt($("#numberDisplay").html().trim());
        if(isNaN(quantity) || quantity==0){
            $('#myModal').modal('hide');
        }else{
            new_order.menuItems.push({name: clicked_item, quantity: quantity});
            $('#myModal').modal('hide');
            var itemListContainer = document.getElementById('itemListContainer');
            itemListContainer.innerHTML = '';
            Blaze.renderWithData(Template.item_list,{new_order: new_order, tableNo: new_order.tableNo, submit: true},itemListContainer);
            console.log(new_order);
        }
    },
    'click #menu_item_btn': function(){
        $('#myModal').modal('show');
        clicked_item = this.name;
    },
    'click #cancelMenuItem':function () {
        $('#numberDisplay').html('');
        $('#myModal').modal('hide');
    }
});
//----

//ITEM LIST
Template.item_list.events({
    'click #cancel_order': function () {
        new_order = {menuItems: []};
        Router.go('waiter_home');
    },
    'click #submit_order': function () {
        Meteor.call('addOrderFromWaiter',new_order.tableNo,new_order.menuItems,Meteor.userId(),function (error) {
            if(error!==undefined) {
                new_order = {menuItems: []};
                $('#errors').html(error.reason);
            }else{
                new_order = {menuItems: []};
                Router.go('waiter_home');
            }
        });
    },
    'click .removeItem': function (event) {
        var index = event.target.value;
        new_order.menuItems.splice(index, 1);
        var itemListContainer = document.getElementById('itemListContainer');
        itemListContainer.innerHTML = '';
        if(new_order.menuItems.length==0){
            Blaze.renderWithData(Template.item_list,{new_order: new_order, tableNo: new_order.tableNo, submit: false},itemListContainer);
        }else{
            Blaze.renderWithData(Template.item_list,{new_order: new_order, tableNo: new_order.tableNo, submit: true},itemListContainer);
        }
    }
});
//----

// ****STATUS CODE FOR ORDERS****
// 0 - NOT READY
// 1 - COOKING
// 2 - READY
// 3 - SERVED
// 4 - BILLED
// *****************************

//ODER LIST
Template.order_list.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('orders',Template.instance().data.status);
    });
});

Template.order_list.helpers({
    orders: ()=>{
        if(Template.instance().data.status==null){
            return Orders.find({});
        }else{
            return Orders.find({status: Template.instance().data.status});
        }
    }
});
//----