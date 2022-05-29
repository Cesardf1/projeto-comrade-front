import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { FinancialTransactionRepository } from '../../repositories/financial-transaction.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteFinancialTransactionUsercase implements UseCase<number, void> {
  constructor(private financialTransactionRepository: FinancialTransactionRepository) {}

  execute(id: number): Observable<void> {
    return this.financialTransactionRepository.deleteFinancialTransaction(id);
  }
}
