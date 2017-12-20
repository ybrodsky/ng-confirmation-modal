import { NgModule, ModuleWithProviders }         from '@angular/core';
import { CommonModule }                          from '@angular/common';
import { BrowserModule }                         from '@angular/platform-browser';
import { BrowserAnimationsModule }               from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import {
  Http, HttpModule,
  RequestOptions, XHRBackend
}                                                from '@angular/http';

import { NgbModule }                             from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalDirective }            from './confirmation-modal.directive';
import { ConfirmationModalConfig }               from './confirmation-modal.config';
import { NgbdModalContent }                      from './modal/modal-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    ConfirmationModalDirective,
    NgbdModalContent
  ],
  exports: [
    ConfirmationModalDirective
  ],
  entryComponents: [NgbdModalContent],
  providers: []
})
export class ConfirmationModalModule {
  static forRoot(config: any): ModuleWithProviders {
    return {
      ngModule: ConfirmationModalModule,
      providers: [ConfirmationModalConfig, {provide: 'ConfirmationModalConfig', useValue: config}]
    };
  }
}
