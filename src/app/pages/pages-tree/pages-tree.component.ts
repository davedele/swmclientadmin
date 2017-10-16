import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { PageNodeComponent } from './page-node/page-node.component';
import { site, areaTypes, themes, contentArea } from '../../data/data';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { BaseModalComponent } from '../../shared/base-modal/base-modal.component';

@Component({
  selector: 'app-pages-tree',
  templateUrl: './pages-tree.component.html',
  styleUrls: ['./pages-tree.component.scss']
})
export class PagesTreeComponent implements OnInit {
  @ViewChild('addPageContent') private addPageModal: BaseModalComponent; 
  pages: any[];
  @Output() nodeSelect: EventEmitter<any> = new EventEmitter();
  constructor( private modalService: NgbModal) { }

  ngOnInit() {
    this.pages = site.pages;
  }

  onAddClick(event){
    console.log("onAddClick", event);
    this.addPageModal.open("content");
    
    // let modalInstance = this.modalService.open(this.addPageModal);
    // modalInstance.result.then((x)=>console.log(x)).catch(error=>{console.log(error)});
    // this.addPageModal.onClose.subscribe((x)=>{
    //   console.log('modalInstance.OnClose',modalInstance,x);
    //   modalInstance.close();
    // });
    
    // this.addPageModal.onDismiss.subscribe((x)=>{
    //   console.log('modalInstance.OnDismiss',modalInstance,x);
    //   modalInstance.dismiss();
    // });
  }

  onPageNodeClick(event){
    this.nodeSelect.emit( event );
  }
  
}
