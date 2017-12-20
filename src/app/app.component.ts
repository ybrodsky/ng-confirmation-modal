import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public options: any = {
		confirmBtnClass: 'btn btn-info',
		confirmBtnText: 'Confirmar',
		modalSize: 'lg'
	}

  confirmed() {
  	console.log('confirmed');
  }

  cancel() {
  	console.log('cancel')
  }
}
