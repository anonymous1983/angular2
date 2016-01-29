import {Component, View, Inject} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl, Validators} from 'angular2/common';
import {AtexoConstant} from '../common/constant/atexo.constant';
import {Util} from '../common/util/util';
import {Progress} from '../progress';

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
    adverts:Object[] = [];
    currentPage:number = 0;
    offset:number = 0;
    limit:number = 5;
    advertService:AdvertService;
    endContent:boolean = false;
    //progress = Progress.getInstance();


    constructor(advertService:AdvertService) {
        this.advertService = advertService;
        this.getAdverts();
    }

    updateStatus(item:AdvertItem) {
        return true;
    }

    getAdverts() {
        var param = {
            limit: this.limit,
            offset: this.offset
        };
        Progress.getInstance().incrementNbrProgress();
        this.advertService.getAdverts(param).subscribe((res:Response) => {

            if (res.status === 200) {
                this.endContent = false;
                res.json().forEach((obj) => {
                    this.adverts.push(obj);
                });
                Progress.getInstance().decrementNbrProgress();
            } else {
                this.endContent = true;
            }

        });
    }

    nextPage() {
        this.offset += this.limit;
        this.getAdverts();
        return true;
    }
}

class Param {
    limit:number = 2;
    offset:number = 2;

    constructor(limit?:number, offset?:number) {
        this.limit = limit;
        this.offset = offset;
    }
}
