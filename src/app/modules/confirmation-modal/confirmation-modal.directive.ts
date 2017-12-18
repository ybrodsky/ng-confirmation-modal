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

@Directive({
  selector:"[ngConfirm]"
})
export class ConfirmationModalDirective {
  constructor(private modalService: NgbModal) {

  }

  @Input() title: string = 'ng-Confirmation-Modal';
  @Input() message: string;
	@Output() onConfirm = new EventEmitter<any>();
	@Output() onCancel = new EventEmitter<any>();

  @HostListener('click', ['$event']) onClick($event){
    this.openModal();
  }

  openModal() {
  	const modalRef = this.modalService.open(NgbdModalContent, {size: 'lg'});
  	modalRef.componentInstance.message = this.message;
    modalRef.componentInstance.title = this.title;

  	modalRef.result.then(() => {
  		this.onConfirm.next();
  	}, (r) => {
  		if(this.onCancel) {
  			this.onCancel.next();
  		}
  	});
  }
}