import {Injectable} from 'angular2/core';
import {Http, RequestOptions, Request, RequestMethod, URLSearchParams} from 'angular2/http';
import {Util} from '../common/util/util';
import {AtexoConstant} from '../common/constant/atexo.constant';
import {AdvertItem} from './advertEntity';

@Injectable()
export class AdvertService {
    http:Http;
    search:URLSearchParams;

    constructor(http:Http) {
        this.http = http;
    }

    getAdverts(_parameter?:Object) {

        _parameter = (typeof _parameter !== 'undefined') ? _parameter : AtexoConstant.rest.request.adverts.all.parameter;

        var options = new RequestOptions({
            method: AtexoConstant.rest.request.adverts.all.method,
            url: new Util.Rest().setPath(AtexoConstant.rest.request.adverts.all.url).build(),
            search: new Util.RequestOptions().setSearchParams(_parameter)
        });
        var req = new Request(options);
        return this.http.request(req);

        // Or use Get function to get request
        // return this.http.get(this.requestUrl);
    }

}