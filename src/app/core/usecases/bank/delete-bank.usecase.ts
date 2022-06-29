import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { BankRepository } from '../../repositories/bank.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteBankUsecase implements UseCase<string, void> {
  constructor(private financialTransactionRepository: BankRepository) {}

  execute(id: string): Observable<void> {
    return this.financialTransactionRepository.deleteBank(id);
  }
}
