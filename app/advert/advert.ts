import {Component, View, Inject} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl, Validators} from 'angular2/common';
import {AtexoConstant} from '../common/constant/atexo.constant';
import {Util} from '../common/util/util';


import {AdvertItem} from './advertEntity';
import {AdvertService} from './advertService';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, RequestMethod} from 'angular2/http';
import {Response} from 'angular2/http';


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
    currentPage:number = 0;

    constructor(advertService:AdvertService) {
        var param = {
            limit: 2,
            offset: 2
        };
        advertService.getAdverts(param).subscribe((res:Response) => {
            this.adverts = res.json();
        });
    }

    updateStatus(item:AdvertItem) {
        return true;
    }

    nextPage() {
        return true;
    }

}
