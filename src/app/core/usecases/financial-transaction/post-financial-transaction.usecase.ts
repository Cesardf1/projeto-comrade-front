import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { FinancialTransactionModel } from '../../models/financial-transaction.model';
import { FinancialTransactionRepository } from '../../repositories/financial-transaction.repository';

@Injectable({
  providedIn: 'root',
})
export class PostFinancialTransactionUsecase
  implements UseCase<FinancialTransactionModel, FinancialTransactionModel>
{
  constructor(private financialTransactionRepository: FinancialTransactionRepository) {}

  execute(params: FinancialTransactionModel): Observable<FinancialTransactionModel> {
    console.log('teste 2 Singular');
    return this.financialTransactionRepository.postFinancialTransaction(params);
  }
}
