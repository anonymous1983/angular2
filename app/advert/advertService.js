System.register(['angular2/core', 'angular2/http', '../common/util/util', '../common/constant/atexo.constant', './advertEntity'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, util_1, atexo_constant_1, advertEntity_1;
    var AdvertService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (atexo_constant_1_1) {
                atexo_constant_1 = atexo_constant_1_1;
            },
            function (advertEntity_1_1) {
                advertEntity_1 = advertEntity_1_1;
            }],
        execute: function() {
            AdvertService = (function () {
                function AdvertService(http) {
                    // this.http = http;
                    this.http = http;
                    this.requestUrl = new util_1.Util.Rest().setPath(atexo_constant_1.AtexoConstant.rest.request.adverts.all.url).build();
                    this.collection = new Array();
                    this.collection.push(new advertEntity_1.AdvertItem('Mercedes classe c garantie 2017', "suite mutation sur Paris je met en vente ma Mercedes classe c 180 exécutive garantie jusqu'en 2017 par Mercedes . la révision vient d'être effectuée . motorisation 156 chevaux turbo essence très faible consommation de 6litres @,elle dispose d 'un grand réservoir de 66 litres(plus de 1000 kilomètres d'autonomie).de l'active park assist ( la voiture se gare toute seule) des feux a led i.l.s avec mode plein phares automatique .GPS Europe a commande vocale et pad tactile . bluetooth pour vos appels et votre musique . lecteur DVD et lecteur de carte sd plus 2 prises USB.capteur de stationnement avant et arrière. Stop and start automatique.aide au démarrage en côte.Régulateur et limiteur de vitesse avec le système anti collision ( la voiture freine automatiquement) capteur de panneaux de signalisation. Sièges en cuir chauffants et électriques avec soutien lombaires . rétroviseurs anti éblouissement etc..... Ma voiture est dans un état neuf aucune rayure ou choc et je suis Non fumeur ,elle sent toujours le neuf . photos supplémentaires sur demande.prix négociable raisonnablement", 'http://img1.leboncoin.fr/images/a03/a036940c7fa53e0b8ba988baf2f9836a192fc3c1.jpg', true));
                    this.collection.push(new advertEntity_1.AdvertItem('Mercedes classe c garantie 2017', "suite mutation sur Paris je met en vente ma Mercedes classe c 180 exécutive garantie jusqu'en 2017 par Mercedes . la révision vient d'être effectuée . motorisation 156 chevaux turbo essence très faible consommation de 6litres @,elle dispose d 'un grand réservoir de 66 litres(plus de 1000 kilomètres d'autonomie).de l'active park assist ( la voiture se gare toute seule) des feux a led i.l.s avec mode plein phares automatique .GPS Europe a commande vocale et pad tactile . bluetooth pour vos appels et votre musique . lecteur DVD et lecteur de carte sd plus 2 prises USB.capteur de stationnement avant et arrière. Stop and start automatique.aide au démarrage en côte.Régulateur et limiteur de vitesse avec le système anti collision ( la voiture freine automatiquement) capteur de panneaux de signalisation. Sièges en cuir chauffants et électriques avec soutien lombaires . rétroviseurs anti éblouissement etc..... Ma voiture est dans un état neuf aucune rayure ou choc et je suis Non fumeur ,elle sent toujours le neuf . photos supplémentaires sur demande.prix négociable raisonnablement", 'http://img1.leboncoin.fr/images/a03/a036940c7fa53e0b8ba988baf2f9836a192fc3c1.jpg', true));
                    this.collection.push(new advertEntity_1.AdvertItem('Mercedes classe c garantie 2017', "suite mutation sur Paris je met en vente ma Mercedes classe c 180 exécutive garantie jusqu'en 2017 par Mercedes . la révision vient d'être effectuée . motorisation 156 chevaux turbo essence très faible consommation de 6litres @,elle dispose d 'un grand réservoir de 66 litres(plus de 1000 kilomètres d'autonomie).de l'active park assist ( la voiture se gare toute seule) des feux a led i.l.s avec mode plein phares automatique .GPS Europe a commande vocale et pad tactile . bluetooth pour vos appels et votre musique . lecteur DVD et lecteur de carte sd plus 2 prises USB.capteur de stationnement avant et arrière. Stop and start automatique.aide au démarrage en côte.Régulateur et limiteur de vitesse avec le système anti collision ( la voiture freine automatiquement) capteur de panneaux de signalisation. Sièges en cuir chauffants et électriques avec soutien lombaires . rétroviseurs anti éblouissement etc..... Ma voiture est dans un état neuf aucune rayure ou choc et je suis Non fumeur ,elle sent toujours le neuf . photos supplémentaires sur demande.prix négociable raisonnablement", 'http://img1.leboncoin.fr/images/a03/a036940c7fa53e0b8ba988baf2f9836a192fc3c1.jpg', true));
                }
                AdvertService.prototype.get = function () {
                    return this.collection;
                };
                AdvertService.prototype.getWithHttp = function () {
                    return this.http.get(this.requestUrl);
                };
                AdvertService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AdvertService);
                return AdvertService;
            })();
            exports_1("AdvertService", AdvertService);
        }
    }
});

//# sourceMappingURL=advertService.js.map
