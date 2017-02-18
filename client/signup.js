// Template.signup.events({
//    'submit .signup-form': function(event){
//        event.preventDefault();
//        var email = $('[name=email]').val();
//        var password = $('[name=password]').val();
//        Accounts.createUser({
//            email: email,
//            password: password
//        });
//    }
// });

Template.signup.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        console.log(emailVar);
        console.log(passwordVar);
        Accounts.createUser({email: emailVar, password: passwordVar});
    }
});