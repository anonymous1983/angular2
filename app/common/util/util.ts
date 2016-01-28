import {AtexoConstant} from '../constant/atexo.constant';
import {isPresent, isJsObject, Json } from 'angular2/src/facade/lang';
import {URLSearchParams} from 'angular2/http';

export module Util {

    export class Rewriter {
        base:string = '';
        uri:string = '';

        constructor(base:string, uri?:string) {
            uri = isPresent(uri) ? uri : '';
            this.base = base;
            this.uri = uri;
        }

        setPath(uri:string):Rewriter {
            this.uri = uri;
            return this;
        }

        build():string {
            return this.base + this.uri;

        }
    }

    export class Path extends Rewriter {
        constructor(path?:string) {
            path = isPresent(path) ? path : '';
            super(AtexoConstant.path.base, path);
        }
    }

    export class Rest extends Rewriter {
        constructor(url?:string) {
            url = isPresent(url) ? url : '';
            super(AtexoConstant.rest.baseUrl, url);
        }
    }



    export class RequestOptions {

        searchParams:URLSearchParams;

        constructor() {
            this.searchParams = new URLSearchParams();
        }

        setSearchParams(data?:Object):URLSearchParams {
            if (!isPresent(data)) {
                return;
            } else {
                if (isJsObject(data)) {
                    for (var item in data) {
                        if (data.hasOwnProperty(item)) {
                            this.searchParams.set(item, data[item]);
                        }
                    }
                }
                return this.searchParams;
            }
        }
    }
}