import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { FinancialTransactionModel } from '../../models/financial-transaction.model';

@Injectable({
  providedIn: 'root',
})
export class PostSystemUserUsecase implements UseCase<SystemUserModel, FinancialTransactionModel> {
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(params: SystemUserModel): Observable<SystemUserModel> {
    console.log('teste 2');
    return this.systemUserRepository.postSystemUser(params);
  }
}
