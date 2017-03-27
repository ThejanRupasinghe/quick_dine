import  SimpleSchema  from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Orders = new Mongo.Collection('orders');

Orders.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

// ****STATE CODE FOR ORDERS****
// 0 - NOT READY
// 1 - COOKING
// 2 - READY
// 3 - SERVED
// 4 - BILLED
// *****************************

OrderSchema = new SimpleSchema({
    tableNo: {
        type: Number,
    },
    menuItems: {
        type: Array
    },
    "menuItems.$": {
        type: Object
    },
    "menuItems.$.name": {
        type: String
    },
    "menuItems.$.quantity": {
        type: Number
    },
    status:{
        type: Number,
        allowedValues: [0, 1, 2, 3, 4]
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            return new Date();
        }
    }
});

Orders.attachSchema(OrderSchema);