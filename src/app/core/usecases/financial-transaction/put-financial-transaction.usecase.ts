import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { FinancialTransactionModel } from '../../models/financial-transaction.model';
import { FinancialTransactionRepository } from '../../repositories/financial-transaction.repository';

@Injectable({
  providedIn: 'root',
})
export class PutFinancialTransactionUsecase implements UseCase<FinancialTransactionModel, void> {
  constructor(private systemUserRepository: FinancialTransactionRepository) {}

  execute(params: FinancialTransactionModel): Observable<void> {
    return this.systemUserRepository.putFinancialTransaction(params);
  }
}
