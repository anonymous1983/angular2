// app/common/constants/atexo.constant.ts
/**
 *
 * @name atexo.constant.ts
 *
 */
System.register(['./atexo.constant.path', './atexo.constant.rest'], function(exports_1) {
    var atexo_constant_path_1, atexo_constant_rest_1;
    var AtexoConstant;
    return {
        setters:[
            function (atexo_constant_path_1_1) {
                atexo_constant_path_1 = atexo_constant_path_1_1;
            },
            function (atexo_constant_rest_1_1) {
                atexo_constant_rest_1 = atexo_constant_rest_1_1;
            }],
        execute: function() {
            exports_1("AtexoConstant", AtexoConstant = {
                path: atexo_constant_path_1.AtexoConstantPath,
                rest: atexo_constant_rest_1.AtexoConstantRest
            });
        }
    }
});

//# sourceMappingURL=atexo.constant.js.map
