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
      <button type="button" class="btn btn-danger" (click)="cancel()">Cancelar</button>
      <button type="button" class="btn btn-success" (click)="confirm()">Aceptar</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() message: string;
  @Input() title: string;

  constructor(public activeModal: NgbActiveModal) {

  }

  cancel() {
    this.activeModal.dismiss();
  }

  confirm() {
  	this.activeModal.close();
  }
}