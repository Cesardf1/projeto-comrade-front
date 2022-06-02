import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { FinancialTransactionManyModel } from '../../models/financial-transaction-many.model';
import { FinancialTransactionRepository } from '../../repositories/financial-transaction.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllFinancialTransactionUsecase
  implements UseCase<PageFilterModel, PageResultModel<FinancialTransactionManyModel>>
{
  constructor(private systemUserRepository: FinancialTransactionRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<FinancialTransactionManyModel>> {
    return this.systemUserRepository.getAllFinancialTransaction(filter);
  }
}
