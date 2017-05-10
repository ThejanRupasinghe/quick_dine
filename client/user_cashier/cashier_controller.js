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
        self.subscribe('menuItems');
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

let passOrder;
Template.order_list_cashier.events({
    'click .bill-order-button': function(event){
        let id = event.target.value;
        let order = Orders.findOne({_id: id});
        // console.log(id);
        // console.log(order);

        passOrder = {_id: order._id, tableNo: order.tableNo, menuItems: []};
        let total=0;

        for (var index in order.menuItems){
            var item = order.menuItems[index];
            var item_details = MenuItems.findOne({_id: item.item_id},{fields: {name:1, unit_price:1}});

            passOrder.menuItems.push({name: item_details.name, quantity: item.quantity, unit_price: item_details.unit_price});

            total+=item.quantity*item_details.unit_price;
        }

        passOrder.total = total;

        BlazeLayout.render('cashier_layout', {content: 'bill_order_cashier', data: passOrder});
    }
});
//----

//BILL ORDER CASHIER
Template.bill_order_cashier.helpers({
    billDate: function(){
        n =  new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        return d + " - " + m + " - " + y;
    },
    billNo: function () {
        return ;
    },
    eachAmount: function(unit_price,quantity){
        return unit_price*quantity;
    }
});

let payment;
Template.bill_order_cashier.events({
    'click .numberButton': function(event){
        $("#numberDisplay").append(event.target.textContent.trim());
    },
    'click .clearButton': function () {
        $('#numberDisplay').html('');
    },
    'click .enterButton': function(){
        payment = parseInt($("#numberDisplay").html().trim());
        if(isNaN(payment) || payment==0 || payment<passOrder.total){

        }else{
           $('#payment').html(payment+'.00&nbsp');
           $('#balance').html((payment-passOrder.total)+'.00&nbsp');
        }
        $('#numberDisplay').html('');
    },
    'click #submitButton': function(){
        var orderId = passOrder._id;
        var total = passOrder.total;

        Meteor.call('addBillFromCashier', );
    }
});
//----