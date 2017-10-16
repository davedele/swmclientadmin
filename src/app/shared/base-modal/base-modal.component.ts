import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {NgbModal,NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent {
  
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onDismiss: EventEmitter<any> = new EventEmitter();
  closeResult: string;
  
  constructor(private modalService: NgbModal) {}
  
  open(content){
    let modalInstance = this.modalService.open(content);
    
  }
    // open(content) {
    //   this.modalService.open(content).result.then((result) => {
    //     this.closeResult = `Closed with: ${result}`;
    //   }, (reason) => {
    //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   });
    // }
  close(){
    console.log('baseModalComponent: close', this.onClose);
    this.onClose.emit();
  }
  dismiss(){
    console.log('baseModalComponent: dismiss', this.onDismiss);
    this.onDismiss.emit();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
