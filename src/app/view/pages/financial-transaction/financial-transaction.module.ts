import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { FinancialTransactionComponent } from './financial-transaction.component';
import { FinancialTransactionRoutingModule } from './financial-transaction.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, FinancialTransactionRoutingModule, ReactiveFormsModule],
  exports: [],
  declarations: [FinancialTransactionComponent],
  providers: [],
})
export class FinancialTransactionModule {
  constructor(@Optional() @SkipSelf() parentModule: FinancialTransactionModule) {
    throwIfAlreadyLoaded(parentModule, 'FinancialTransactionModule');
  }
}
