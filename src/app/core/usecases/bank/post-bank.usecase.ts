import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { BankModel } from '../../models/bank.model';
import { BankRepository } from '../../repositories/bank.repository';

@Injectable({
  providedIn: 'root',
})
export class PostBankUsecase implements UseCase<BankModel, BankModel> {
  constructor(private bankRepository: BankRepository) {}

  execute(params: BankModel): Observable<BankModel> {
    console.log('teste 2 Singular');
    return this.bankRepository.postBank(params);
  }
}
