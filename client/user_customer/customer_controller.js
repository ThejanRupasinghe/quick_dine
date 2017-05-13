//CUSTOMER LOGIN
Template.customer_login.events({
    'submit form': function(event){
        event.preventDefault();
        var tableNo = $('[name=tableNo]').val();

        if(isNaN(tableNo) || tableNo<=0 || tableNo>15){
            $('#helper_text').html("Invalid Table Number");
            $('#tableNo_group').addClass("has-error");
            $('[name=tableNo]').val("");
            $('[name=tableNo]').focus();
        }else{
            Router.go('customer_home', {tableNo: tableNo});
        }
    }
});
//----

//CUSTOMER MENU
Template.customer_menu.onCreated(function () {
    var self = this;

    self.autorun(function () {
        self.subscribe('categories');
    });
});

Template.customer_menu.helpers({
    categories: ()=>{
        return Categories.find({});
    }
});

Template.customer_menu.events({
    'click .categoryButton': function (event) {
        var index = event.target.value;
        var categoryMenuContainer = document.getElementById('categoryMenuContainer');
        categoryMenuContainer.innerHTML = '';
        Blaze.renderWithData(Template.category_menu,{id: index},categoryMenuContainer);
    }
});
//----

//CATEGORY MENU
Template.category_menu.onCreated(function () {
    var self = this;

    self.autorun(function () {
        self.subscribe('itemsForCategory',Template.instance().data.id);
    });
});

Template.category_menu.helpers({
    itemsForCategory: ()=>{
        return MenuItems.find({category: Template.instance().data.id, inMenu: true});
    }
});
//----