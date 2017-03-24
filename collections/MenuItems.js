import  SimpleSchema  from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

MenuItems = new Mongo.Collection('menuItems');

MenuItems.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

MenuItemSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name:"
    },
    category: {
        type: String,
        label: "Category:"
    },
    unit_price:{
        type: Number,
        label: "Unit Price:",
        min: 1
    },
    inMenu:{
        type: Boolean,
        autoValue: function () {
            return true;
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date();
        }
    }
});

// MenuItems.attachSchema(MenuItemSchema);