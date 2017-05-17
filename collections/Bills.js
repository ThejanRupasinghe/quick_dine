import  SimpleSchema  from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Bills = new Mongo.Collection('bills');

Bills.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

BillSchema = new SimpleSchema({
    orderId: {
        type: String,
        allowedValues: function () {
            return Orders.find().map(function (doc) {
                return doc._id;
            })
        }
    },
    billNo: {
        type: Number,
        min: 1
    },
    total:{
        type: Number,
        min: 0
    },
    payment:{
        type: Number,
        min: 0
    },
    balance:{
        type: Number,
        min: 0
    },
    cashierId: {
        type: String,
        allowedValues: function () {
            return Meteor.users.find({'profile.role': "cashier"}).map(function (doc) {
                return doc._id;
            })
        }
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            return new Date();
        }
    }
});

Bills.attachSchema(BillSchema);