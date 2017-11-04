import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject } from 'rxjs';
import { site, themes } from '../data/data'

import {Page } from '../pages';

@Injectable()
export class PagesService {
    
    activePage:BehaviorSubject<number> = new BehaviorSubject<number>(0);
    
    constructor( private http: HttpClient){}
    
    private flatten(pages){
        var pgs = [];
        pages.forEach((page)=>{
            pgs.push({id:page.id, title:page.title, slug:page.slug, layoutId:page.layoutId, contents: page.contents, body:page.body });
            pgs.concat(this.flatten(page.children));
        });
        return pgs;
    }
    listPages(){
       
        return this.flatten(site.pages);
    }

    getPagesTree() {
        site.pages;
    }

    private findPage(id, pages){
        let pg = null;
        pages.forEach((page) => {
            if( pg === null){
                if( page.id === id ){
                    pg = page;

                } else {
                    pg = this.findPage(id, page.children );
                }
            }
        });
        return pg;
    }

    getPage(id){
        // return Observable.create( (observer) => {
        //     const page =  <Page>{
        //         title: 'home', 
        //         body: 'Home Page'
        //     };
        //     observer.onNext(page);
        //     observer.onCompleted();
        // });
        let pg = this.findPage(id,site.pages);
        return pg;
        //return this.http.get(`ajaxproxy.cfc?method=clientadmin.pages.getPage&id=${id}`);
    }

    getLayout( id ){
        let layout;
        let theme = themes.find( (theme)=>{
            return ( theme.id === site.themeId );
        });
        console.log("Theme", theme );
        if( typeof theme !== undefined ){
            layout = theme.layouts.find( (layout) => { 
                return ( id === layout.id );
            });
            console.log("layout", layout );
        }

        return layout;
    }
}