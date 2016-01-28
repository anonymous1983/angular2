System.register(['angular2/core', './advertService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, advertService_1;
    var Advert;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (advertService_1_1) {
                advertService_1 = advertService_1_1;
            }],
        execute: function() {
            Advert = (function () {
                function Advert(advertService) {
                    var _this = this;
                    this.currentPage = 0;
                    var param = {
                        limit: 2,
                        offset: 2
                    };
                    advertService.getAdverts(param).subscribe(function (res) {
                        _this.adverts = res.json();
                    });
                }
                Advert.prototype.updateStatus = function (item) {
                    return true;
                };
                Advert.prototype.nextPage = function () {
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
