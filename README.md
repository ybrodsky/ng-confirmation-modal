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
  console.log('confirmed');
 }

 cancelled() {
  console.log('cancelled');
 }

```


### Todo
Done in a rush because couldn't find anything alike, so:

- Add options to set classes and stuff
- Make some tests
- Set some global configs for messages and texts and classes and w/e

