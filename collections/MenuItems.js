// MenuItems = new Mongo.Collection('menuItems');
//
// MenuItems.allow({
//     insert: function (userId, doc) {
//         return !!userId;
//     },
//     update: function (userId, doc) {
//         return !!userId;
//     }
// });
//
// MenuItemSchema = new SimpleSchema({
//     name: {
//         type: String,
//         label: "Name"
//     },
//     category: {
//         type: String,
//         label: "Category",
//         allowedValues: ["Breakfast", "Lunch", "Dinner", "Dessert", "Drinks", "Short Eats", "Other"]
//     },
//     unitAmount:{
//         type: Number,
//         label: "Unit Amount",
//         defaultValue: 1,
//         min: 1
//     },
//     unitPrice:{
//         type: Number,
//         label: "Unit Price",
//         decimal: true,
//         min: 1
//     },
//     inMenu:{
//         type: Boolean,
//         defaultValue: true
//     }
// });