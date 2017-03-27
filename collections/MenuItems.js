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
        type: String
    },
    category: {
        type: String,
        allowedValues: function () {
            return Categories.find().map(function (doc) {
                return doc._id;
            })
        }
    },
    unit_price:{
        type: Number,
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
        autoValue: function () {
            return new Date();
        }
    }
});

//Categories.find({},{fields: "_id"}).map((e) => {return e._id;})
// MenuItems.attachSchema(MenuItemSchema);