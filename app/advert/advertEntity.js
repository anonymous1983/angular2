System.register([], function(exports_1) {
    var AdvertItem;
    return {
        setters:[],
        execute: function() {
            AdvertItem = (function () {
                function AdvertItem(titre, description, url, status) {
                    this.titre = titre;
                    this.description = description;
                    this.url = url;
                    this.status = status;
                }
                return AdvertItem;
            })();
            exports_1("AdvertItem", AdvertItem);
        }
    }
});

//# sourceMappingURL=advertEntity.js.map
