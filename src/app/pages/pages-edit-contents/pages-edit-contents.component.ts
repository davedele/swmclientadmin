import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Page, PagesService } from '../';

@Component({
  selector: 'app-pages-edit-contents',
  templateUrl: './pages-edit-contents.component.html',
  styleUrls: ['./pages-edit-contents.component.scss']
})
export class PagesEditContentsComponent implements OnInit {
  @Input() page: any=null;
  @Input() layout: any=null;
  contentAreas: any[] = [];
  bodyContent: string;
  contents: any[] = [];
  constructor( private sanitizer: DomSanitizer ) { }

  ngOnInit() {
  }
  getBodyContent(){
    return "";
    //return this.sanitizer.bypassSecurityTrustHtml( this.layout && this.layout.body || '' );
  }

}
