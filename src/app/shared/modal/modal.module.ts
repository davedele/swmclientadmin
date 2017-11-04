import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  imports: [
    CommonModule
  ],
  providers:[],
  declarations: [ModalContainerComponent, ModalComponent],
  exports:[ModalComponent,ModalContainerComponent]
})
export class ModalModule { }
