import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs/Observable';

import {User} from '../user';

@Injectable()
export class UserService {

    constructor( private http: HttpClient){}

    getUser(id){
        return new Promise( (resolve, reject ) => {
            resolve( <User>{
                firstName: 'Bobby', 
                lastName: 'Heath',
                email: 'bobby.heath@inetleap.com',
                phone: '214-669-7802',
                userName: 'bheath',
                password: '',
                aboutMe: 'I am the lead engineer for this project.'
            });
        });
        
        //return this.http.get(`ajaxproxy.cfc?method=clientadmin.getUser&id=${id}`, { withCredentials: true } );
    }

    saveUser(user){
        return this.http.post('/ajaxproxy.cfc?method=clientadmin:user.saveProfile', JSON.stringify(user), { withCredentials: true } );
    }
}