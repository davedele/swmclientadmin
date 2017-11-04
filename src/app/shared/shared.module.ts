import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModalComponent } from './base-modal/base-modal.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [BaseModalComponent],
  exports:[BaseModalComponent]
})
export class SharedModule { }
