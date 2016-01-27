System.register(['angular2/http'], function(exports_1) {
    var http_1;
    var AtexoConstantRest;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            exports_1("AtexoConstantRest", AtexoConstantRest = {
                baseUrl: 'http://localhost/symfony2.local/web/app_dev.php/api/v1/',
                request: {
                    adverts: {
                        all: {
                            method: http_1.RequestMethod.Get,
                            url: 'adverts'
                        },
                        add: {
                            method: http_1.RequestMethod.Post,
                            url: 'adverts'
                        },
                        byId: {
                            method: http_1.RequestMethod.Get,
                            url: 'adverts'
                        }
                    }
                }
            });
        }
    }
});

//# sourceMappingURL=atexo.constant.rest.js.map
