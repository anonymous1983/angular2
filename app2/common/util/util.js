System.register(['angular2/core', 'angular2/http', 'angular2/src/facade/lang', '../constant/atexo.constant'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, lang_1, atexo_constant_1;
    var Util, Rewriter, Path, Rest, RequestOptions;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (atexo_constant_1_1) {
                atexo_constant_1 = atexo_constant_1_1;
            }],
        execute: function() {
            Util = (function () {
                function Util() {
                    if (!Util.isCreating) {
                        throw new Error('[Util] You can\'t call new in Singleton instances!');
                    }
                }
                Util.getInstance = function () {
                    if (Util.instance == null) {
                        Util.isCreating = true;
                        Util.instance = new Util();
                        Util.isCreating = false;
                    }
                    return Util.instance;
                };
                Util.prototype.Path = function () {
                    return new Path();
                };
                Util.prototype.Rest = function () {
                    return new Rest();
                };
                Util.prototype.RequestOptions = function () {
                    return new RequestOptions();
                };
                Util.isCreating = false;
                Util = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Util);
                return Util;
            })();
            exports_1("Util", Util);
            Rewriter = (function () {
                function Rewriter(base, uri) {
                    this.base = '';
                    this.uri = '';
                    uri = lang_1.isPresent(uri) ? uri : '';
                    this.base = base;
                    this.uri = uri;
                }
                Rewriter.prototype.setPath = function (uri) {
                    this.uri = uri;
                    return this;
                };
                Rewriter.prototype.build = function () {
                    return this.base + this.uri;
                };
                return Rewriter;
            })();
            Path = (function (_super) {
                __extends(Path, _super);
                function Path(path) {
                    path = lang_1.isPresent(path) ? path : '';
                    _super.call(this, atexo_constant_1.AtexoConstant.path.base, path);
                }
                return Path;
            })(Rewriter);
            Rest = (function (_super) {
                __extends(Rest, _super);
                function Rest(url) {
                    url = lang_1.isPresent(url) ? url : '';
                    _super.call(this, atexo_constant_1.AtexoConstant.rest.baseUrl, url);
                }
                return Rest;
            })(Rewriter);
            RequestOptions = (function () {
                function RequestOptions() {
                    this.searchParams = new http_1.URLSearchParams();
                }
                RequestOptions.prototype.setSearchParams = function (data) {
                    if (!lang_1.isPresent(data)) {
                        return;
                    }
                    else {
                        if (lang_1.isJsObject(data)) {
                            for (var item in data) {
                                if (data.hasOwnProperty(item)) {
                                    this.searchParams.set(item, data[item]);
                                }
                            }
                        }
                        return this.searchParams;
                    }
                };
                return RequestOptions;
            })();
        }
    }
});

//# sourceMappingURL=util.js.map
