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
        self.subscribe('kitchenOrders');
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
//----