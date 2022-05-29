import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinancialTransactionComponent } from './financial-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialTransactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialTransactionRoutingModule {}
