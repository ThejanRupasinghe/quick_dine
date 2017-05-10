// ****STATUS CODE FOR ORDERS****
// 0 - NOT READY
// 1 - COOKING
// 2 - READY
// 3 - SERVED
// 4 - BILLED
// *****************************

//KITCHEN HOME
Template.kitchen_home.events({
    'click #allOrders': function () {
        var orderListContainer = document.getElementById('orderListContainer');
        orderListContainer.innerHTML = '';
        Blaze.renderWithData(Template.order_list_kitchen,{status: null},orderListContainer);
    },
    'click #toCookOrders': function () {
        var orderListContainer = document.getElementById('orderListContainer');
        orderListContainer.innerHTML = '';
        Blaze.renderWithData(Template.order_list_kitchen,{status: 0},orderListContainer);
    },
    'click #cookingOrders': function () {
        var orderListContainer = document.getElementById('orderListContainer');
        orderListContainer.innerHTML = '';
        Blaze.renderWithData(Template.order_list_kitchen,{status: 1},orderListContainer);
    },
    'click #readyOrders': function () {
        var orderListContainer = document.getElementById('orderListContainer');
        orderListContainer.innerHTML = '';
        Blaze.renderWithData(Template.order_list_kitchen,{status: 2},orderListContainer)
    }
});
//----

//ODER LIST KITCHEN
Template.order_list_kitchen.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('ordersByStatus');
        self.subscribe('menuItems');
    });
});

//TODO: take only today orders for kitchen
Template.order_list_kitchen.helpers({
    orders: ()=>{
        var status = Template.instance().data.status;
        if(status==null){
            return Orders.find({});
        }else{
            return Orders.find({status: status});
        }
    },
    ready: function(status){
        return status == 2;
    },
    toCook: function (status) {
        return status==0;
    },
    cooking: function (status) {
        return status==1;
    }
});

Template.order_list_kitchen.events({
    'click .view-order-button': function(event){
        let id = event.target.value;
        let order = Orders.findOne({_id: id});

        let passOrder = {_id: order._id, tableNo: order.tableNo, menuItems: [], status: order.status};

        for (var index in order.menuItems){
            var item = order.menuItems[index];
            var name = MenuItems.findOne({_id: item.item_id},{fields: {name:1}}).name;

            passOrder.menuItems.push({name: name,quantity: item.quantity});
        }

        BlazeLayout.render('kitchen_layout', {content: 'kitchen_view_order', data: passOrder});
    }
});
//----

//KITCHEN VIEW ORDER
Template.kitchen_view_order.events({
    'click #back': function(event){
        event.preventDefault();
        BlazeLayout.render('kitchen_layout',{content: 'kitchen_home',order_list: 'order_list_kitchen'});
    },
    'click #cooking': function(event){
        let id = event.target.value;
        Meteor.call("changeOrderStatus", id, 1);
        BlazeLayout.render('kitchen_layout',{content: 'kitchen_home',order_list: 'order_list_kitchen'});
    },
    'click #ready': function(event){
        let id = event.target.value;
        Meteor.call("changeOrderStatus", id, 2);
        BlazeLayout.render('kitchen_layout',{content: 'kitchen_home',order_list: 'order_list_kitchen'});
    }
});

Template.kitchen_view_order.helpers({
    notReady: function (status) {
        return status==0;
    },
    cooking: function (status) {
        return status==1;
    }
});
//----