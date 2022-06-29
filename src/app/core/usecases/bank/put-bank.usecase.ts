import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { BankModel } from '../../models/bank.model';
import { BankRepository } from '../../repositories/bank.repository';

@Injectable({
  providedIn: 'root',
})
export class PutBankUsecase implements UseCase<BankModel, void> {
  constructor(private bankRepository: BankRepository) {}

  execute(params: BankModel): Observable<void> {
    return this.bankRepository.putBank(params);
  }
}
