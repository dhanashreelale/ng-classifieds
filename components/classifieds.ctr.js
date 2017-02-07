( function(){
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("ClassifiedsCtrl", function($scope) {

            // $scope.name = {
            //     first:  "Dhanashree",
            //     last: "Kulkarni"
            // };
            $scope.classifieds = [
                {
                    "id":"1",
                    "title":"Swaroski Earrings",
                    "description":"Bella Pierced Earrings This is a pair of very special earrings that can be worn on any occasion. Be it a casual glamorous look or a cool chic one, this set of rhodium-plated pierced earrings with bezel-set, faceted clear crystal are ideal. The earrings come as a pair. Diameter of the crystal: 1.4 cm.",
                    "price": 79,
                    "posted":"2015-10-24",
                    "contact": {
                        "name":"John Doe",
                        "phone":"(555) 555-5555",
                        "email":"johndoe@gmail.com"
                    },
                    "categories":[
                        "Jewellery",
                        "Earrings"
                    ],
                    "image": "http://www.swarovski.com:80/is-bin/intershop.static/WFS/SCO-Media-Site/-/-/publicimages/CG/B2C/PROD/BestView/Swarovski-Bella-Pierced-Earrings-883551.jpg",
                    "views":213
                },
                {
                    "id":"2",
                    "title":"Lilly Pulitzer MURFEE SCARF - NASHVILLE",
                    "description":"We created these special edition Murfee City Scarves - Nashville, with you in mind, brimming with tiny little details about the place you call home. Wear it yourself to showoff your favorite city, or give it as a gift to a friend who's moved away to remind her that it will ALWAYS be home.",
                    "price": 118,
                    "posted": "2015-10-28",
                    "contact": {
                        "name": "Jane Doe",
                        "phone": "(555) 555-5555",
                        "email": "janedoe@gmail.com"
                    },
                    "categories": [
                        "Clothing"
                    ],
                    "image":"//sugartown.scene7.com/is/image/sugartown/75112_poolsidebluenashvillemurfee?$pdpHeroImage$",
                    "views":422
                },
                {
                    "id":"3",
                    "title":"Colorful Chakra Journal",
                    "description":"This colorful Chakra Stones double clasp embossed leather bound journal measures 13 in. high, 10 in. long, 1.75 in. wide.",
                    "price":119.99,
                    "posted":"2015-10-27",
                    "contact": {
                        "name":"Jane Doe",
                        "phone":"(555) 555-5555",
                        "email":"janedoe@gmail.com"
                    },
                    "categories":[
                        "Stationary"
                    ],
                    "image":"https://images-na.ssl-images-amazon.com/images/I/61lmrf4LpML._SX466_.jpg",
                    "views":23
                },
                {
                    "id":"4",
                    "title":"Harmony Loveseat",
                    "description":"Brown leather sofa for sale.  Good condition but small tear on one cushion.",
                    "price":250,
                    "posted":"2015-11-01",
                    "contact": {
                        "name":"John Doe",
                        "phone":"(555) 555-5555",
                        "email":"johndoe@gmail.com"
                    },
                    "categories":[
                        "Furniture"
                    ],
                    "image":"http://rk.weimgs.com/weimgs/rk/images/wcm/products/201652/0028/harmony-loveseat-c.jpg",
                    "views":77
                },
                {
                    "id":"5",
                    "title":"MacBook Air",
                    "description":"2013 MacBook Air. Great condition, but a few scratches.",
                    "price":1150,
                    "posted":"2015-11-02",
                    "contact": {
                        "name":"John Doe",
                        "phone":"(555) 555-5555",
                        "email":"johndoe@gmail.com"
                    },
                    "categories":[
                        "Electronics",
                        "Computer Parts and Accessories"
                    ],
                    "image":"http://cdn.macrumors.com/article-new/2014/11/macbook_air_yosemite-800x450.jpg?retina",
                    "views":889
                },
                {
                    "id":"6",
                    "title":"JEEP CHEROKEE OVERLAND",
                    "description":"he 2017 Jeep® Cherokee Overland is the most captivating vehicle in its class.Trusted Jeep Brand capability, an abundance of standard luxury features and refined exterior styling make this SUV the ultimate Cherokee trim level.",
                    "price":34895,
                    "posted":"2017-02-07",
                    "contact": {
                        "name":"John Doe",
                        "phone":"(555) 555-5555",
                        "email":"johndoe@gmail.com"
                    },
                    "categories":[
                        "Vehicles",
                        "Cars"
                    ],
                    "image":"https://static.cargurus.com/images/site/2016/09/16/16/14/2017_jeep_cherokee-pic-2638568167346618145-640x480.jpeg",
                    "views":423
                }
            ]
            
        })

})();