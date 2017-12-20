import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	 options: any = {
	 	confirmBtnClass: 'btn btn-success',      //DEFAULT VALUE
	  //confirmBtnText: 'Confirm',      				//DEFAULT VALUE
	  cancelBtnClass: 'btn btn-danger',      //DEFAULT VALUE
	  cancelBtnText: 'Cancel',      				//DEFAULT VALUE
	  modalSize: 'lg',      							 //DEFAULT VALUE
	  modalClass: ''      								//DEFAULT VALUE
	 }

	 confirmed() {
	  console.log('confirmed');
	 }

	 cancelled() {
	  console.log('cancelled');
	 }
}
