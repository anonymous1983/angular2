import {Component, View, Inject} from 'angular2/core';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';



import {AdvertItem} from './advertEntity';
import {AdvertService} from './advertService';
import {Progress} from '../progress';



@Component({
    selector: 'advert',
    providers: [AdvertService]
})
@View({
    templateUrl: './app/advert/advert-list.html'
})

export class Advert {
    adverts:Object[] = [];
    currentPage:number = 0;
    offset:number = 0;
    limit:number = 5;
    advertService:AdvertService;
    endContent:boolean = false;

    constructor(advertService:AdvertService) {
        this.advertService = advertService;
        this.getAdverts();
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


    updateStatus(item:AdvertItem) {
        return true;
    }

    nextPage() {
        this.offset += this.limit;
        this.getAdverts();
        return true;
    }

}
