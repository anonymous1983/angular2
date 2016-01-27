import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Util} from '../common/util/util';
import {AtexoConstant} from '../common/constant/atexo.constant';
import {AdvertItem} from './advertEntity';

@Injectable()
export class AdvertService {
    collection:Array<AdvertItem>;
    collection2:Array<Object>;
    requestUrl: string;
    http:Http;

    constructor(http:Http) {
       // this.http = http;
        this.http = http;

        this.requestUrl = new Util.Rest().setPath(AtexoConstant.rest.request.adverts.all.url).build();

        this.collection = new Array<AdvertItem>();
        this.collection.push(
            new AdvertItem('Mercedes classe c garantie 2017', "suite mutation sur Paris je met en vente ma Mercedes classe c 180 exécutive garantie jusqu'en 2017 par Mercedes . la révision vient d'être effectuée . motorisation 156 chevaux turbo essence très faible consommation de 6litres @,elle dispose d 'un grand réservoir de 66 litres(plus de 1000 kilomètres d'autonomie).de l'active park assist ( la voiture se gare toute seule) des feux a led i.l.s avec mode plein phares automatique .GPS Europe a commande vocale et pad tactile . bluetooth pour vos appels et votre musique . lecteur DVD et lecteur de carte sd plus 2 prises USB.capteur de stationnement avant et arrière. Stop and start automatique.aide au démarrage en côte.Régulateur et limiteur de vitesse avec le système anti collision ( la voiture freine automatiquement) capteur de panneaux de signalisation. Sièges en cuir chauffants et électriques avec soutien lombaires . rétroviseurs anti éblouissement etc..... Ma voiture est dans un état neuf aucune rayure ou choc et je suis Non fumeur ,elle sent toujours le neuf . photos supplémentaires sur demande.prix négociable raisonnablement", 'http://img1.leboncoin.fr/images/a03/a036940c7fa53e0b8ba988baf2f9836a192fc3c1.jpg', true)
        );
        this.collection.push(
            new AdvertItem('Mercedes classe c garantie 2017', "suite mutation sur Paris je met en vente ma Mercedes classe c 180 exécutive garantie jusqu'en 2017 par Mercedes . la révision vient d'être effectuée . motorisation 156 chevaux turbo essence très faible consommation de 6litres @,elle dispose d 'un grand réservoir de 66 litres(plus de 1000 kilomètres d'autonomie).de l'active park assist ( la voiture se gare toute seule) des feux a led i.l.s avec mode plein phares automatique .GPS Europe a commande vocale et pad tactile . bluetooth pour vos appels et votre musique . lecteur DVD et lecteur de carte sd plus 2 prises USB.capteur de stationnement avant et arrière. Stop and start automatique.aide au démarrage en côte.Régulateur et limiteur de vitesse avec le système anti collision ( la voiture freine automatiquement) capteur de panneaux de signalisation. Sièges en cuir chauffants et électriques avec soutien lombaires . rétroviseurs anti éblouissement etc..... Ma voiture est dans un état neuf aucune rayure ou choc et je suis Non fumeur ,elle sent toujours le neuf . photos supplémentaires sur demande.prix négociable raisonnablement", 'http://img1.leboncoin.fr/images/a03/a036940c7fa53e0b8ba988baf2f9836a192fc3c1.jpg', true)
        );
        this.collection.push(
            new AdvertItem('Mercedes classe c garantie 2017', "suite mutation sur Paris je met en vente ma Mercedes classe c 180 exécutive garantie jusqu'en 2017 par Mercedes . la révision vient d'être effectuée . motorisation 156 chevaux turbo essence très faible consommation de 6litres @,elle dispose d 'un grand réservoir de 66 litres(plus de 1000 kilomètres d'autonomie).de l'active park assist ( la voiture se gare toute seule) des feux a led i.l.s avec mode plein phares automatique .GPS Europe a commande vocale et pad tactile . bluetooth pour vos appels et votre musique . lecteur DVD et lecteur de carte sd plus 2 prises USB.capteur de stationnement avant et arrière. Stop and start automatique.aide au démarrage en côte.Régulateur et limiteur de vitesse avec le système anti collision ( la voiture freine automatiquement) capteur de panneaux de signalisation. Sièges en cuir chauffants et électriques avec soutien lombaires . rétroviseurs anti éblouissement etc..... Ma voiture est dans un état neuf aucune rayure ou choc et je suis Non fumeur ,elle sent toujours le neuf . photos supplémentaires sur demande.prix négociable raisonnablement", 'http://img1.leboncoin.fr/images/a03/a036940c7fa53e0b8ba988baf2f9836a192fc3c1.jpg', true)
        );

    }



    get() {
        return this.collection;
    }

    getWithHttp() {
        return this.http.get(this.requestUrl);
    }
}