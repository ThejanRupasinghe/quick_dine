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
    'change #item_picture': function (event) {
        event.preventDefault();
        var img = document.getElementById('view_item_picture');
        var file = event.target.files[0];

        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function(event){
            var result = reader.result;
            img.src = result;
        };

    },
    'submit #add_form': function(event) {
        event.preventDefault();
        var name = $('[name=name]').val();
        var category = $('[name=category]').val();
        var unit_price = $('[name=unit_price]').val();
        var item_picture = document.getElementById('item_picture').files[0];

        var reader = new FileReader(); //create a reader according to HTML5 File API
        reader.readAsDataURL(item_picture);
        reader.onload = function(event){
            var result = reader.result; //assign the result, if you console.log(result), you get {}
            var buffer = new Uint8Array(result);// convert to binary
            // MyPix.insert({binary: result});
        };

        // reader.readAsArrayBuffer(item_picture); //read the file as arraybuffer
        reader.readAsDataURL(item_picture);

        if(unit_price<1){
            $('#unit_price_group').addClass("has-error");
            $('#unit_price_helper').html("Invalid Unit Price");
            $('[name=unit_price]').val("");
            $('[name=unit_price]').focus();
            $('#name_group').removeClass("has-error");
            $('#name_helper').html("");
        }else{
            if(confirm("Do you want to add this menu item ?")){
                Meteor.call('addMenuItemFromAdmin',name,category,unit_price,function (error) {
                    if(error !== undefined){
                        $('#name_group').addClass("has-error");
                        $('#name_helper').html(error.reason);
                        $('[name=name]').val("");
                        $('[name=name]').focus();
                        $('#unit_price_group').removeClass("has-error");
                        $('#unit_price_helper').html("");
                    }else{
                        $('[name=name]').val("");
                        $('[name=unit_price]').val("");
                        $('[name=name]').focus();
                        $('#unit_price_group').removeClass("has-error");
                        $('#unit_price_helper').html("");
                        $('#name_group').removeClass("has-error");
                        $('#name_helper').html("");
                        alert("Menu Item added successfully");
                    }
                });
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
        self.subscribe('itemsForCategory',Template.instance().data.category._id);
    });
});

Template.item_table.helpers({
    itemsForCategory: ()=>{
        return MenuItems.find({category: Template.instance().data.category._id, inMenu: true});
    }
});
//----

//EDIT ITEM FORM
Template.edit_item_form.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('categories');
    });
});

Template.edit_item_form.helpers({
    categories: ()=>{
        return Categories.find({});
    }
});

Template.edit_item_form.events({
    'submit #edit_form': function(event){
        event.preventDefault();
        var id = $('[name=id]').val();
        var current_name = $('[name=current_name]').val();
        var new_name = $('[name=new_name]').val();
        var current_category = $('[name=current_category]').val();
        var new_category = $('[name=new_category]').val();
        var unit_price = $('[name=unit_price]').val();

        if(confirm("Are you sure want to update this item ?")){
            if(new_category===current_category || new_category==="null"){
                if(current_name===new_name){
                    Meteor.call('updateMenuItemFromAdmin',id,null,new_category,unit_price);
                    alert("Menu Item updated successfully");
                    Router.go('admin_menu_edit');
                }else{
                    Meteor.call('updateMenuItemFromAdmin',id,new_name,current_category,unit_price,function (error) {
                        if(error!==undefined){
                            $('[name=new_name]').val("");
                            $('#name_group').addClass("has-error");
                            $('#name_helper').html(error.reason);
                        }else{
                            Meteor.call('updateMenuItemFromAdmin',id,null,new_category,unit_price);
                            alert("Menu Item updated successfully");
                            Router.go('admin_menu_edit');
                        }
                    });
                }
            }else{
                Meteor.call('updateMenuItemFromAdmin',id,new_name,new_category,unit_price,function (error) {
                    if(error!==undefined){
                        $('[name=new_name]').val("");
                        $('#name_group').addClass("has-error");
                        $('#name_helper').html(error.reason);
                    }else{
                        Meteor.call('updateMenuItemFromAdmin',id,null,new_category,unit_price);
                        alert("Menu Item updated successfully");
                        Router.go('admin_menu_edit');
                    }
                });
            }
        }
    },
    'click #cancel':function () {
        Router.go('admin_menu_edit');
    }
});
//----

//ITEM RECORD
Template.item_record.events({
    'click #remove-item': function(){
        if(confirm("Are you sure want to remove this item from menu ?")){
            Meteor.call('removeItemMenuFromAdmin',this.item._id);
            alert("Menu Item deleted successfully !");
        }
    }
});
//----