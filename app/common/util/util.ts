import {AtexoConstant} from '../constant/atexo.constant';

export module Util {

    export class Rewriter {
        base:string = '';
        uri:string = '';

        constructor(base:string, uri?:string) {
            uri = (typeof uri !== 'undefined') ? uri : '';
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
            path = (typeof path !== 'undefined') ? path : '';
            super(AtexoConstant.path.base, path);
        }
    }

    export class Rest extends Rewriter {
        constructor(url?:string) {
            url = (typeof url !== 'undefined') ? url : '';
            super(AtexoConstant.rest.baseUrl, url);
        }
    }
}