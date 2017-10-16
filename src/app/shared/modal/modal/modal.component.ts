import { ModalContainer } from '../modal-container/modal-container';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends ModalContainer {

  @Input() foo;
	constructor(){
		super();
	}
	onSave(){};
	// the closeModal function will be available 
	// on the ModalContainer parent class

}
