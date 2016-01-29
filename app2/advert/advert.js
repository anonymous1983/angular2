System.register(['angular2/core', '../progress', './advertService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, progress_1, advertService_1;
    var Advert, Param;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (progress_1_1) {
                progress_1 = progress_1_1;
            },
            function (advertService_1_1) {
                advertService_1 = advertService_1_1;
            }],
        execute: function() {
            Advert = (function () {
                //progress = Progress.getInstance();
                function Advert(advertService) {
                    //adverts: Array<AdvertItem>;
                    this.adverts = [];
                    this.currentPage = 0;
                    this.offset = 0;
                    this.limit = 5;
                    this.endContent = false;
                    this.advertService = advertService;
                    this.getAdverts();
                }
                Advert.prototype.updateStatus = function (item) {
                    return true;
                };
                Advert.prototype.getAdverts = function () {
                    var _this = this;
                    var param = {
                        limit: this.limit,
                        offset: this.offset
                    };
                    progress_1.Progress.getInstance().incrementNbrProgress();
                    this.advertService.getAdverts(param).subscribe(function (res) {
                        if (res.status === 200) {
                            _this.endContent = false;
                            res.json().forEach(function (obj) {
                                _this.adverts.push(obj);
                            });
                            progress_1.Progress.getInstance().decrementNbrProgress();
                        }
                        else {
                            _this.endContent = true;
                        }
                    });
                };
                Advert.prototype.nextPage = function () {
                    this.offset += this.limit;
                    this.getAdverts();
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
            Param = (function () {
                function Param(limit, offset) {
                    this.limit = 2;
                    this.offset = 2;
                    this.limit = limit;
                    this.offset = offset;
                }
                return Param;
            })();
        }
    }
});

//# sourceMappingURL=advert.js.map
