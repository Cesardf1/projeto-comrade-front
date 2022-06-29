import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { FinancialTransactionRepository } from '../../repositories/financial-transaction.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteFinancialTransactionUsecase implements UseCase<string, void> {
  constructor(private financialTransactionRepository: FinancialTransactionRepository) {}

  execute(id: string): Observable<void> {
    return this.financialTransactionRepository.deleteFinancialTransaction(id);
  }
}
