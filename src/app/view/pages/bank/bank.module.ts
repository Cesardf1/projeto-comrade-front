import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { BankRoutingModule } from './bank.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { BankComponent } from './bank.component';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, BankRoutingModule],
  exports: [],
  declarations: [BankComponent],
  providers: [],
})
export class BankModule {
  constructor(@Optional() @SkipSelf() parentModule: BankModule) {
    throwIfAlreadyLoaded(parentModule, 'BankModule');
  }
}
