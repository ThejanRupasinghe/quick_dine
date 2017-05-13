import {resetDatabase} from 'meteor/xolvio:cleaner';

describe('create menu item', function () {
    it('method adds a menu item from admin', function () {
        beforeEach(function () {
            resetDatabase();
        });

        let name = "Hoppers";
        let category = "NzqhFakzdXFcA6Xg9";
        let unit_price = "10";

        Meteor.apply('addMenuItemFromAdmin',name,category,unit_price);

    })
});

//meteor test --driver-package=practicalmeteor:mocha --port 3100