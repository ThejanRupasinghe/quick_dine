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