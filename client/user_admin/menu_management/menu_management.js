//ADD MENU ITEMS
Template.add_menu_items.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('categories');
        self.subscribe('menuItems');
    });
});

Template.add_menu_items.helpers({
    categories: ()=>{
        return Categories.find({});
    },
    menuItems: ()=>{
        return MenuItems.find({inMenu: false});
    }
});

var file_ok = false;
Template.add_menu_items.events({
    'change #item_picture': function (event) {
        event.preventDefault();
        file_ok = false;
        var img = document.getElementById('view_item_picture');
        var file_error = $('[id=file_error]');
        file_error.html("");
        var file = event.target.files[0];

        var re = /(?:\.([^.]+))?$/;
        var ext = re.exec(file.name)[1];

        if(ext=="jpg" || ext=="JPG"){
            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function(event){
                var result = reader.result;
                img.src = result;
            };

            file_ok=true;
        }else{
            img.removeAttribute("src");
            file_error.html("Only .jpg or .JPG files");
            file_ok=false;
        }
    },
    'submit #add_form': function(event) {
        event.preventDefault();
        var name = $('[name=name]').val();
        var category = $('[name=category]').val();
        var unit_price = $('[name=unit_price]').val();
        var file = document.getElementById('item_picture').files[0];

        if(file_ok){

            var reader = new FileReader(); //create a reader according to HTML5 File API

            reader.onload = function(event){
                var result_pic = reader.result; //assign the result, if you console.log(result), you get {}
                addItem(result_pic);
            };

            reader.readAsDataURL(file);

        }else{
            alert("Invalid Food Item Picture");
        }

        function addItem(item_picture) {

            if (unit_price < 1) {
                $('#unit_price_group').addClass("has-error");
                $('#unit_price_helper').html("Invalid Unit Price");
                $('[name=unit_price]').val("");
                $('[name=unit_price]').focus();
                $('#name_group').removeClass("has-error");
                $('#name_helper').html("");
            } else {
                if (confirm("Do you want to add this menu item ?")) {
                    Meteor.call('addMenuItemFromAdmin', name, category, unit_price, item_picture, function (error) {
                        if (error !== undefined) {
                            $('#name_group').addClass("has-error");
                            $('#name_helper').html(error.reason);
                            $('[name=name]').val("");
                            $('[name=name]').focus();
                            $('#unit_price_group').removeClass("has-error");
                            $('#unit_price_helper').html("");
                        } else {
                            $('[name=name]').val("");
                            $('[name=unit_price]').val("");
                            $('[name=item_picture]').val("");
                            $('[name=name]').focus();
                            document.getElementById('view_item_picture').removeAttribute("src");
                            $('[id=file_error]').html("");
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

    },
    'click #add-item': function(event){
        event.preventDefault();

        var id = event.target.value;

        if(confirm("Are you sure want to add this item to menu ?")){
            Meteor.call('addItemToMenuFromAdmin',id);
            alert("Menu Item added successfully !");
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
    'change #item_picture': function (event) {
        event.preventDefault();
        file_ok = false;
        var img = document.getElementById('view_item_picture');
        var file_error = $('[id=file_error]');
        file_error.html("");
        var file = event.target.files[0];

        var re = /(?:\.([^.]+))?$/;
        var ext = re.exec(file.name)[1];

        if(ext=="jpg" || ext=="JPG"){
            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function(event){
                var result = reader.result;
                img.src = result;
            };

            file_ok=true;
        }else{
            img.removeAttribute("src");
            file_error.html("Only .jpg or .JPG files");
            file_ok=false;
        }
    },
    'submit #edit_form': function(event){
        event.preventDefault();
        var id = $('[name=id]').val();
        var current_name = $('[name=current_name]').val();
        var new_name = $('[name=new_name]').val();
        var current_category = $('[name=current_category]').val();
        var new_category = $('[name=new_category]').val();
        var unit_price = $('[name=unit_price]').val();
        var file = document.getElementById('item_picture').files[0];

        if(confirm("Are you sure want to update this item ?")){

            if(file!==undefined){
                if(file_ok){

                        var reader = new FileReader(); //create a reader according to HTML5 File API

                        reader.onload = function(event){
                            var result_pic = reader.result; //assign the result, if you console.log(result), you get {}
                            updateItem(result_pic);
                        };

                        reader.readAsDataURL(file);

                }else{
                    alert("Invalid Food Item Picture");
                }

            }else if(file==undefined){
                updateItem(null);
            }

        }

        function updateItem(item_picture) {

            if(new_category===current_category || new_category==="null"){
                if(current_name===new_name){
                    Meteor.call('updateMenuItemFromAdmin',id,null,new_category,unit_price,item_picture);
                    alert("Menu Item updated successfully");
                    Router.go('admin_menu_edit');
                }else{
                    Meteor.call('updateMenuItemFromAdmin',id,new_name,current_category,unit_price,item_picture, function (error) {
                        if(error!==undefined){
                            $('[name=new_name]').val("");
                            $('#name_group').addClass("has-error");
                            $('#name_helper').html(error.reason);
                        }else{
                            Meteor.call('updateMenuItemFromAdmin',id,null,new_category,unit_price,item_picture);
                            alert("Menu Item updated successfully");
                            Router.go('admin_menu_edit');
                        }
                    });
                }
            }else{
                Meteor.call('updateMenuItemFromAdmin',id,new_name,new_category,unit_price,item_picture,function (error) {
                    if(error!==undefined){
                        $('[name=new_name]').val("");
                        $('#name_group').addClass("has-error");
                        $('#name_helper').html(error.reason);
                    }else{
                        Meteor.call('updateMenuItemFromAdmin',id,null,new_category,unit_price,item_picture);
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
            alert("Menu Item removed successfully !");
        }
    }
});
//----