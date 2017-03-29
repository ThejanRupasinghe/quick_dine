import {resetDatabase} from 'meteor/xolvio:cleaner';

describe('user management', function () {
    it('method creates a user', function () {
        beforeEach(function () {
            resetDatabase();
        });

        let username = "admin1";
        let password = "admin1";
        let role = "admin";
        let name = "Thejan";

        Meteor.call('createUserFromAdmin',username,password,role,name);

    })
});

//meteor test --driver-package=practicalmeteor:mocha --port 3100