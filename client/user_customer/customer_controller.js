//CUSTOMER LOGIN
Template.customer_login.events({
    'submit form': function(event){
        event.preventDefault();
        var tableNo = $('[name=tableNo]').val();

        if(isNaN(tableNo) || tableNo<=0 || tableNo>15){
            $('#helper_text').html("Invalid Table Number");
            $('#tableNo_group').addClass("has-error");
            $('[name=tableNo]').val("");
            $('[name=tableNo]').focus();
        }else{
            Router.go('customer_home', {tableNo: tableNo});
        }
    }
});
//----