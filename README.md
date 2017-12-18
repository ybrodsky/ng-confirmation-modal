## Angular 4 Confirmation Modal using ng-bootstrap's modal

### Installation

```npm install --save ng-confirmation-modal```

```
 import { ConfirmationModalModule } from 'ng-confirmation-modal';


 imports: [
  ConfirmationModalModule
 ]
```

### Usage

```
 <a
  ngConfirm
  [title]="'Confirm'"
  [message]="'Are you sure kiddo?'"
  (onConfirm)="confirmed()"
  (onCancel)="cancelled()"
 >
  Delete some very important stuff
 </a>

 //`title` and `onCancel` are optional

 confirmed() {
  console.log('confirmed'):
 }

 cancelled() {
  console.log('cancelled');
 }

```

