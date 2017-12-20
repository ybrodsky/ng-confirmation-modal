import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfirmationModalModule } from './modules/confirmation-modal/confirmation-modal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConfirmationModalModule.forRoot({
    	confirmBtnText: 'Pepe'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
