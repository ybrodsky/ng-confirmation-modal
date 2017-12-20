import {Component, Injectable, Injector, Inject} from '@angular/core';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ConfirmationModalConfig {

	public modalSize				:any = 'lg';
	public modalClass				:string = '';
	public confirmBtnText		:string = 'Confirm';
	public confirmBtnClass	:string = 'btn btn-success';
	public cancelBtnText		:string = 'Cancel';
	public cancelBtnClass		:string = 'btn btn-danger';

  constructor(@Inject('config') public options:any) {
  	for(let option in options) {
  		this[option] = options[option];
  	}
  }
}