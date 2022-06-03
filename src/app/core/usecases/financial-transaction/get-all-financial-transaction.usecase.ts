import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { FinancialTransactionModel } from '../../models/financial-transaction.model';
import { FinancialTransactionRepository } from '../../repositories/financial-transaction.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllFinancialTransactionUsecase
  implements UseCase<PageFilterModel, PageResultModel<FinancialTransactionModel>>
{
  constructor(private financialTransactionRepository: FinancialTransactionRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<FinancialTransactionModel>> {
    return this.financialTransactionRepository.getAllFinancialTransaction(filter);
  }
}
