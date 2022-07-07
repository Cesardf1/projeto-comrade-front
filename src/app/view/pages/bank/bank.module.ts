import {
  NgModule,
  Optional,
  SkipSelf,
  Component,
  ViewChild,
  enableProdMode,
  AfterViewInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxDataGridModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTextAreaModule,
  DxFormComponent,
} from 'devextreme-angular';
import { BankRoutingModule } from './bank.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { BankComponent } from './bank.component';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, DxSelectBoxModule, BankRoutingModule],
  exports: [],
  declarations: [BankComponent],
  providers: [],
})
export class BankModule {
  constructor(@Optional() @SkipSelf() parentModule: BankModule) {
    throwIfAlreadyLoaded(parentModule, 'BankModule');
  }
}
