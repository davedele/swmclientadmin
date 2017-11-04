import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs/Observable';

import {Settings} from './';

@Injectable()
export class SettingsService {

    constructor( private http: HttpClient){}

    getSettings(id){
        return new Promise( (resolve,reject) => {
            const model =  <Settings>{
                logo:'logo.png',
                slogan: 'someslogan',
                contactEmail: 'bobby.heath@gmail.com',
                theme:{ 
                    name:'supercoolteachblue', 
                    options: [
                        { name:'primaryColor', label:'Primary Color', value:'blue' },
                        { name:'secondaryColor', label:'Secondary Color', value:'red' }
                    ]
                }
            };

            resolve(model);
        });
        
        //return this.http.get(`/ajaxproxy.cfc?method=clientadmin:settings.getSettings&id=${id}`).ToPromise();
    }
}