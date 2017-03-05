//ADD MENU ITEMS
Template.add_menu_items.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('categories');
    });
});

Template.add_menu_items.helpers({
    categories: ()=>{
        return Categories.find({});
    }
});

Template.add_menu_items.events({
    'submit #add_form': function(event) {
        event.preventDefault();
        var name = $('[name=name]').val();
        var category = $('[name=category]').val();
        var unit_price = $('[name=unit_price]').val();

        if(unit_price<1){
            $('#unit_price_group').addClass("has-error");
            $('#unit_price_helper').html("Invalid Unit Price");
            $('[name=unit_price]').val("");
            $('[name=unit_price]').focus();
        }else{
            if(confirm("Do you want to add this menu item ?")){
                if (!(Meteor.call('addMenuItemFromAdmin',name,category,unit_price))){
                //     $('#name_group').addClass("has-error");
                //     $('#name_helper').html("This food item has added before");
                //     $('[name=name]').val("");
                // }else{
                    $('[name=name]').val("");
                    $('[name=unit_price]').val("");
                    $('[name=name]').focus();
                    alert("Menu Item added successfully");
                }
            }
        }
    }
});
//----

//EDIT MENU ITEMS
Template.edit_menu_items.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('categories');
    });
});

Template.edit_menu_items.helpers({
    categories: ()=>{
        return Categories.find({});
    }
});
//----

//ITEM TABLE
Template.item_table.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('menuItems');
    });
});

Template.item_table.helpers({
    menuItems: ()=>{
        console.log(this._id);
        return MenuItems.find({category: this._id});
    }
});
//----