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
    'submit #add_form': function(event){
        event.preventDefault();
        var name = $('[name=name]').val();
        var username = $('[name=username]').val();
        var password = $('[name=password]').val();
        var repassword = $('[name=repassword]').val();
        var role = $('[name=role]').val();

        if (!(password===repassword)){
            $('#password_group').addClass("has-error");
            $('#repassword_group').addClass("has-error");
            $('#password_helper').html("Passwords don't match");
            $('[name=password]').val("");
            $('[name=repassword]').val("");
            $('#username_group').removeClass("has-error");
            $('#username_helper').html("");
            $('[name=password]').focus();
        }else{
            if(confirm("Are you sure want to create this user ?")){
                Meteor.call('createUserFromAdmin',username,password,role,name,function(error){
                    if(error !== undefined){
                        $('#username_group').addClass("has-error");
                        $('#username_helper').html(error.reason);
                        $('#password_group').removeClass("has-error");
                        $('#repassword_group').removeClass("has-error");
                        $('#password_helper').html("");
                        $('[name=username]').val("");
                        $('[name=password]').val("");
                        $('[name=repassword]').val("");
                        $('[name=username]').focus();
                    }else{
                        alert("User created successfully !");
                        $('[name=name]').val("");
                        $('[name=username]').val("");
                        $('[name=password]').val("");
                        $('[name=repassword]').val("");
                        $('#password_group').removeClass("has-error");
                        $('#repassword_group').removeClass("has-error");
                        $('#username_group').removeClass("has-error");
                        $('#password_helper').html("");
                        $('#username_helper').html("");
                        $('[name=name]').focus();
                    }
                });
            }
        }
    }
});

Template.user_record.events({
    'click #delete-user': function(){
        if(confirm("Are you sure want to delete this user ?")){
            Meteor.call('deleteUserFromAdmin',this._id);
            alert("User deleted successfully !");
        }
    }
});

//no delete for logged in admin
Template.user_record.helpers({
    isAdmin: function(id){
        return id !== Meteor.userId();
    }
});

Template.user_edit_form.events({
    'submit #edit_form': function(event){
        event.preventDefault();
        var id = $('[name=id]').val();
        var name = $('[name=name]').val();
        var password = $('[name=password]').val();
        var repassword = $('[name=repassword]').val();
        var role;

        if($('[name=new_role]').val()==="null"){
            role = $('[name=role]').val();
        }else{
            role = $('[name=new_role]').val();
        }

        if (!(password===repassword)){
            $('#password_group').addClass("has-error");
            $('#repassword_group').addClass("has-error");
            $('#password_helper').html("Passwords don't match");
            $('[name=password]').val("");
            $('[name=repassword]').val("");
        }else{
            if(confirm("Are you sure want to update this user ?")){
                Meteor.call('updateUserFromAdmin',id,password,role,name);
                alert("User updated successfully !");
                Router.go('admin_user_management');
            }
        }
    },
    'click #cancel':function () {
        Router.go('admin_user_management');
    }
});