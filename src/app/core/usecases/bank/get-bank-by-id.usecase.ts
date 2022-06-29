import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { BankModel } from '../../models/bank.model';
import { BankRepository } from '../../repositories/bank.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetBankByIdUsecase implements UseCase<string, SingleResultModel<BankModel>> {
  constructor(private systemUserRepository: BankRepository) {}

  execute(id: string): Observable<SingleResultModel<BankModel>> {
    return this.systemUserRepository.getBankById(id);
  }
}
