import  SimpleSchema  from 'simpl-schema';

Rates = new Mongo.Collection('rates');

// ****RATE CODE****
// 1 - ANGRY
// 2 - SAD
// 3 - NEUTRAL
// 4 - HAPPY
// 5 - VERY HAPPY
// *****************

Rates.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

RateSchema = new SimpleSchema({
    rate_no: {
        type: Number,
        allowedValues: [1, 2, 3, 4, 5]
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            return new Date();
        }
    }
});

Rates.attachSchema(RateSchema);