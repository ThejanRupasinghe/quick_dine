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

Template.order_list_cashier.events({
    'click .bill-order-button': function(event){
        let id = event.target.value;
        let order = Orders.findOne({_id: id});
        // console.log(id);
        // console.log(order);
        BlazeLayout.render('cashier_layout', {content: 'bill_order_cashier', data: order});
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
    }
});

Template.bill_order_cashier.events({
    'click .numberButton': function(event){
        $("#numberDisplay").append(event.target.textContent.trim());
    },
    'click .clearButton': function () {
        $('#numberDisplay').html('');
    },
    'click .enterButton': function(){
        let quantity = parseInt($("#numberDisplay").html().trim());
        if(isNaN(quantity) || quantity==0){

        }else{
           $('#payment').html(quantity+'.00&nbsp');
        }
        $('#numberDisplay').html('');
    }
});
//----