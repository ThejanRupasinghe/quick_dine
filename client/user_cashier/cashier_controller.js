// ****STATUS CODE FOR ORDERS****
// 0 - NOT READY
// 1 - COOKING
// 2 - READY
// 3 - SERVED
// 4 - BILLED
// *****************************

//CASHIER HOME
Template.cashier_home.events({
    'click #newButton': function () {
        var orderListContainer = document.getElementById('orderListContainer');
        orderListContainer.innerHTML = '';
        Blaze.renderWithData(Template.order_list_cashier,{status: 3},orderListContainer);
    },
    'click #billedButton': function () {
        var orderListContainer = document.getElementById('orderListContainer');
        orderListContainer.innerHTML = '';
        Blaze.renderWithData(Template.order_list_cashier,{status: 4},orderListContainer);
    }
});
//----

//ODER LIST CASHIER
Template.order_list_cashier.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('ordersByStatus');
    });
});

//TODO: take only today orders for cashier
Template.order_list_cashier.helpers({
    orders: ()=>{
        var status = Template.instance().data.status;
        if(status==undefined){
            return Orders.find({status: 3});
        }else{
            return Orders.find({status: status});
        }
    },
    new: function(status){
        return status == 3;
    },
    billed: function (status) {
        return status==4;
    }
});

Template.order_list_cashier.events({
    'click .view-order-button': function(event){
        // let id = event.target.value;
        // let order = Orders.findOne({_id: id});
        // console.log(id);
        // console.log(order);
        // BlazeLayout.render('kitchen_layout', {content: 'kitchen_view_order', data: order});
    }
});
//----
