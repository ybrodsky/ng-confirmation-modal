### NOT MAINTAINED. ALTERNATIVELY USE https://github.com/avssolutions/angular-confirm-modal

## Angular 6 Confirmation Modal using ng-bootstrap's modal

### Installation

```npm install --save ng-confirmation-modal```

```javascript
 import { ConfirmationModalModule } from 'ng-confirmation-modal';


 imports: [
  ConfirmationModalModule.forRoot({
   //optional global config

   //confirmBtnClass: 'btn btn-success',
   //confirmBtnText: 'Confirm',
   //cancelBtnClass: 'btn btn-danger',
   //cancelBtnText: 'Cancel',
   //modalSize: 'lg',
   //modalClass: 'some-modal-class'
  })
 ]
```

### Usage

```html
 <a
  ngConfirm
  [title]="'Confirm'"
  [message]="'Are you sure kiddo?'"
  [options]="options"
  (onConfirm)="confirmed()"
  (onCancel)="cancelled()"
 >
  Delete some very important stuff
 </a>
```

```javascript
 options: any = {
 	confirmBtnClass: 'btn btn-success',      //DEFAULT VALUE
  confirmBtnText: 'Confirm',      				//DEFAULT VALUE
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

```


### Todo
Done in a rush because couldn't find anything alike, so:

- ~~Add options to set classes and stuff~~
- Make some tests
- ~~Set some global configs for messages and texts and classes and w/e~~
- Have the way of setting config reviewed because I just went with my gut

