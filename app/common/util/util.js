System.register(['../constant/atexo.constant', 'angular2/src/facade/lang', 'angular2/http'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var atexo_constant_1, lang_1, http_1;
    var Util;
    return {
        setters:[
            function (atexo_constant_1_1) {
                atexo_constant_1 = atexo_constant_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            (function (Util) {
                var Rewriter = (function () {
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
                Util.Rewriter = Rewriter;
                var Path = (function (_super) {
                    __extends(Path, _super);
                    function Path(path) {
                        path = lang_1.isPresent(path) ? path : '';
                        _super.call(this, atexo_constant_1.AtexoConstant.path.base, path);
                    }
                    return Path;
                })(Rewriter);
                Util.Path = Path;
                var Rest = (function (_super) {
                    __extends(Rest, _super);
                    function Rest(url) {
                        url = lang_1.isPresent(url) ? url : '';
                        _super.call(this, atexo_constant_1.AtexoConstant.rest.baseUrl, url);
                    }
                    return Rest;
                })(Rewriter);
                Util.Rest = Rest;
                var RequestOptions = (function () {
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
                Util.RequestOptions = RequestOptions;
            })(Util = Util || (Util = {}));
            exports_1("Util", Util);
        }
    }
});

//# sourceMappingURL=util.js.map
