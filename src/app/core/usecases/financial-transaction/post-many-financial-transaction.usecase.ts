import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { FinancialTransactionManyModel } from '../../models/financial-transaction-many.model';
import { FinancialTransactionRepository } from '../../repositories/financial-transaction.repository';

@Injectable({
  providedIn: 'root',
})
export class PostManyFinancialTransactionUsecase
  implements UseCase<FinancialTransactionManyModel, FinancialTransactionManyModel>
{
  constructor(private financialTransactionRepository: FinancialTransactionRepository) {}

  execute(params: FinancialTransactionManyModel): Observable<FinancialTransactionManyModel> {
    console.log('teste 2');
    return this.financialTransactionRepository.postManyFinancialTransaction(params);
  }
}
