import { Component, OnInit, ViewChild, ViewContainerRef, Injector } from '@angular/core';
import { ModalService } from "../modal.service";

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  @ViewChild("modalContainer", {read: ViewContainerRef }) viewContainerRef;

  constructor(
    private modalService: ModalService,
    private injector: Injector
  ) { }

  ngOnInit() {
    this.modalService.registerViewContainerRef(this.viewContainerRef);
    this.modalService.registerInjector(this.injector);
  }

}
