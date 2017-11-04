import { Person } from '../models';

export class User extends Person {
    userName: string;
    password: string;
    active: boolean = false;
    aboutMe: string;
    permissions: {}[] = [];
    preferrences: {}[] = [];
    AuthToken: string = '';

}