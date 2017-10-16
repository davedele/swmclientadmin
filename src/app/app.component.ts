import { Component, ElementRef } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseModalComponent } from './shared/base-modal/base-modal.component';
import {site, areaTypes, themes, contentArea } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Client Admin';
  //constructor( public elementRef: ElementRef){
  //  var native = this.elementRef.nativeElement;
  //  var site = native.getAttribute("site");
  //}
}
