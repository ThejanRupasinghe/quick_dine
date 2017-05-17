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

describe('update menu item', function () {
    it('method updates a menu item from admin', function () {
        beforeEach(function () {
            resetDatabase();
        });

        let category = "NzqhFakzdXFcA6Xg9";
        let unit_price = "15";
        let item_picture = null;
        let name = null;
        let id = "m3NAs3qoGfAdnPfxx";

        Meteor.apply('updateMenuItemFromAdmin',id,name,category,unit_price,item_picture);

    })
});

describe('remove menu item', function () {
    it('method removes a menu item from admin', function () {
        beforeEach(function () {
            resetDatabase();
        });

		let id = "m3NAs3qoGfAdnPfxx";

        Meteor.call('removeItemMenuFromAdmin',id);

    })
});

//meteor test --driver-package=practicalmeteor:mocha --port 3100