import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngbd-modal-content',
  styles: [`
    button {
      cursor: pointer;
    }
	`],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="cancel()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{message}}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" [class]="options.cancelBtnClass" (click)="cancel()">
        {{options.cancelBtnText}}
      </button>
      <button type="button" class="btn btn-success" [class]="options.confirmBtnClass" (click)="confirm()">
        {{options.confirmBtnText}}
      </button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() message: string;
  @Input() title: string;
  @Input() options: any;

  constructor(public activeModal: NgbActiveModal) {

  }

  cancel() {
    this.activeModal.dismiss();
  }

  confirm() {
  	this.activeModal.close();
  }
}