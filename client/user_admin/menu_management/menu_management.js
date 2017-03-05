Template.menu_management.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('categories');
    });
});

Template.menu_management.helpers({
    categories: ()=>{
        return Categories.find({});
    }
});