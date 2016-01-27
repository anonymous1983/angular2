System.register(['../constant/atexo.constant'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var atexo_constant_1;
    var Util;
    return {
        setters:[
            function (atexo_constant_1_1) {
                atexo_constant_1 = atexo_constant_1_1;
            }],
        execute: function() {
            (function (Util) {
                var Rewriter = (function () {
                    function Rewriter(base, uri) {
                        this.base = '';
                        this.uri = '';
                        uri = (typeof uri !== 'undefined') ? uri : '';
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
                        path = (typeof path !== 'undefined') ? path : '';
                        _super.call(this, atexo_constant_1.AtexoConstant.path.base, path);
                    }
                    return Path;
                })(Rewriter);
                Util.Path = Path;
                var Rest = (function (_super) {
                    __extends(Rest, _super);
                    function Rest(url) {
                        url = (typeof url !== 'undefined') ? url : '';
                        _super.call(this, atexo_constant_1.AtexoConstant.rest.baseUrl, url);
                    }
                    return Rest;
                })(Rewriter);
                Util.Rest = Rest;
            })(Util = Util || (Util = {}));
            exports_1("Util", Util);
        }
    }
});

//# sourceMappingURL=util.js.map
