// app/common/constant/atexo.constant.rest.ts
/**
 *
 * @name atexo.constant.rest.ts
 *
 */
import {RequestMethod} from 'angular2/http';

export const AtexoConstantRest = {
    baseUrl: 'http://localhost/symfony2.local/web/app_dev.php/api/v1/',
    request: {
        adverts: {
            all: {
                method: RequestMethod.Get,
                url: 'adverts'
            },
            add: {
                method: RequestMethod.Post,
                url: 'adverts'
            },
            byId: {
                method: RequestMethod.Get,
                url: 'adverts'
            }
        }
    }
};