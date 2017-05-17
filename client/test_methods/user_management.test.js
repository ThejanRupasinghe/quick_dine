import {resetDatabase} from 'meteor/xolvio:cleaner';

describe('create user', function () {
    it('method creates a user from admin', function () {
        beforeEach(function () {
            resetDatabase();
        });

        let username = "admin1";
        let password = "admin1";
        let role = "admin";
        let name = "Thejan";

        Meteor.apply('createUserFromAdmin',username,password,role,name);

    })
});

describe('delete user', function () {
    it('method deletes a user from admin', function () {
        beforeEach(function () {
            resetDatabase();
        });

        let id = "isgY4N9xrJe5YjnQT";

        Meteor.apply('deleteUserFromAdmin',id);

    })
});

//meteor test --driver-package=practicalmeteor:mocha --port 3100