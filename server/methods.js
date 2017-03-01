Meteor.methods({
    getUser : function() {
        var userRec = {};
        if (Meteor.userId()) {
            userRec = Meteor.user();
        }
        return 1;
    },
    createUserFromAdmin:function(username,password,role,name){
        Accounts.createUser({
            username: username,
            password: password,
            profile : {
                role: role,
                name: name
            }
        });
    },
    deleteUserFromAdmin:function(id){
        Meteor.users.remove({_id: id});
    }
});