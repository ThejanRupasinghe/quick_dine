Template.user_management.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('users');
    });
});

Template.user_management.helpers({
    users: ()=>{
        return Meteor.users.find({});
    }
});

Template.user_management.events({
    'submit form': function(event){
        event.preventDefault();
        var name = $('[name=name]').val();
        var username = $('[name=username]').val();
        var password = $('[name=password]').val();
        var repassword = $('[name=repassword]').val();
        var role = $('[name=role]').val();

        if (!(password===repassword)){
            alert("Passwords don't match");
        }else{
            Meteor.call('createUserFromAdmin',username,password,role,name,function(error){
                if(error !== undefined){
                    alert(error.reason);
                    $('[name=username]').val("");
                    $('[name=password]').val("");
                    $('[name=repassword]').val("");
                }else{
                    alert("User created successfully !");
                    $('[name=name]').val("");
                    $('[name=username]').val("");
                    $('[name=password]').val("");
                    $('[name=repassword]').val("");
                }
            });
        }
    }
});

Template.user_record.events({
    'click #delete-user': function(){
        if(confirm("Are you sure want to delete this user ?")){
            Meteor.call('deleteUserFromAdmin',this._id);
        }
    },
    'click #edit-user':function(){
        
    }
});