import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewContainerRef } from '@angular/core';
import {JsonPipe, } from '@angular/common';

@Component({
  selector: 'contentArea',
  templateUrl: './pages-contentarea.component.html',
  styleUrls: ['./pages-contentarea.component.css']
})
export class PagesContentareaComponent implements OnInit {
  @Input() contents: any[] = [];
  @Input() name:string;
  @Output() addContent: EventEmitter<any> = new EventEmitter();
  container: ViewContainerRef;
  constructor(private element: ElementRef) {
    console.log( "PagesContentAreaComponent", this);
   }

  ngOnInit() {
    //this.name = this.element.nativeElement;
    console.log( "PagesContentAreaComponent.onInit", this);
  }

  OnAddContent(target,pos){
    console.log("AddContent", arguments );
  }
}
