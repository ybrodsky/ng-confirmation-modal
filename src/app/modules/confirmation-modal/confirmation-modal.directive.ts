import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewContainerRef,
  ComponentRef,
  OnDestroy,
  ElementRef,
  OnChanges,
  OnInit,
  ReflectiveInjector,
  ResolvedReflectiveProvider,
  ComponentFactoryResolver,
  Injector,
  Inject,
  Renderer2,
  TemplateRef,
  ComponentFactory
} from '@angular/core';

import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './modal/modal-content.component';
import { ConfirmationModalConfig } from './confirmation-modal.config';

@Directive({
  selector:"[ngConfirm]"
})
export class ConfirmationModalDirective {
  constructor(private modalService: NgbModal, private config: ConfirmationModalConfig) {

  }

  @Input() title: string = 'ng-Confirmation-Modal';
  @Input() message: string;
  @Input() options: any;
	@Output() onConfirm = new EventEmitter<any>();
	@Output() onCancel = new EventEmitter<any>();

  @HostListener('click', ['$event']) onClick($event){
    this.openModal();
  }

  openModal() {
    let defaults = {
      confirmBtnText: this.config.confirmBtnText,
      confirmBtnClass: this.config.confirmBtnClass,
      cancelBtnText: this.config.cancelBtnText,
      cancelBtnClass: this.config.cancelBtnClass,
      modalSize: this.config.modalSize,
      modalClass: this.config.modalClass
    }

    if(this.options) {
      for(let key in defaults) {
        defaults[key] = this.options[key] || defaults[key];
      }
    }

  	const modalRef = this.modalService.open(NgbdModalContent, {
      size: defaults.modalSize,
      windowClass: defaults.modalClass
    });

  	modalRef.componentInstance.message = this.message;
    modalRef.componentInstance.title = this.title;
    modalRef.componentInstance.options = defaults;

  	modalRef.result.then(() => {
  		this.onConfirm.next();
  	}, (r) => {
  		if(this.onCancel) {
  			this.onCancel.next();
  		}
  	});
  }
}