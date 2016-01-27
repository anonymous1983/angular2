System.register(['angular2/core', '../common/constant/atexo.constant', '../common/util/util', './advertService', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, atexo_constant_1, util_1, advertService_1, http_1;
    var Advert;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (atexo_constant_1_1) {
                atexo_constant_1 = atexo_constant_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (advertService_1_1) {
                advertService_1 = advertService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Advert = (function () {
                function Advert(advertService) {
                    this.adverts = advertService.get();
                    advertService.getWithHttp().subscribe(function (res) { return console.log(res); });
                    var options = new http_1.RequestOptions({
                        method: http_1.RequestMethod.Post,
                        url: 'https://google.com'
                    });
                    var req = new http_1.Request(options);
                    console.log('req.method:', http_1.RequestMethod[req.method]); // Post
                    console.log('options.url:', options.url); // https://google.com
                    console.log(options);
                    console.log(req);
                    console.log(http_1.RequestMethod.Post);
                    console.log(atexo_constant_1.AtexoConstant);
                    var utilsPath = new util_1.Util.Path();
                    var utilsUrl = new util_1.Util.Rest();
                    console.log(utilsPath.setPath('sss').build());
                    console.log(new util_1.Util.Rest().setPath('Adver').build());
                }
                Advert.prototype.updateStatus = function (item) {
                    console.log(item);
                    return true;
                };
                Advert = __decorate([
                    core_1.Component({
                        selector: 'advert',
                        providers: [advertService_1.AdvertService]
                    }),
                    core_1.View({
                        templateUrl: './app/advert/advert-list.html'
                    }), 
                    __metadata('design:paramtypes', [advertService_1.AdvertService])
                ], Advert);
                return Advert;
            })();
            exports_1("Advert", Advert);
        }
    }
});

//# sourceMappingURL=advert.js.map
