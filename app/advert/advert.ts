import {Component, View, Inject} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl, Validators} from 'angular2/common';
import {AtexoConstant} from '../common/constant/atexo.constant';
import {Util} from '../common/util/util';


import {AdvertItem} from './advertEntity';
import {AdvertService} from './advertService';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, RequestMethod} from 'angular2/http';


@Component({
    selector: 'advert',
    providers: [AdvertService]
})
@View({
    templateUrl: './app/advert/advert-list.html'
})

export class Advert {
    //adverts: Array<AdvertItem>;
    adverts:Object[];
    advert2:Array<Object>;


    constructor(advertService:AdvertService) {

        this.adverts = advertService.get();

        advertService.getWithHttp().subscribe(res => console.log(res));


        var options = new RequestOptions({
            method: RequestMethod.Post,
            url: 'https://google.com'
        });
        var req = new Request(options);
        console.log('req.method:', RequestMethod[req.method]); // Post
        console.log('options.url:', options.url); // https://google.com
        console.log(options);
        console.log(req);
        console.log(RequestMethod.Post);

        console.log(AtexoConstant);
        var utilsPath = new Util.Path();
        var utilsUrl = new Util.Rest();
        console.log(utilsPath.setPath('sss').build());
        console.log(new Util.Rest().setPath('Adver').build());

    }

    updateStatus(item:AdvertItem) {
        console.log(item);
        return true;
    }

}
