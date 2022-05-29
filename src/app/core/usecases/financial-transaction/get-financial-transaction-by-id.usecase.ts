import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { FinancialTransactionModel } from '../../models/financial-transaction.model';
import { FinancialTransactionRepository } from '../../repositories/financial-transaction.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetFinancialTransactionByIdUsecase
  implements UseCase<number, SingleResultModel<FinancialTransactionModel>>
{
  constructor(private systemUserRepository: FinancialTransactionRepository) {}

  execute(id: number): Observable<SingleResultModel<FinancialTransactionModel>> {
    return this.systemUserRepository.getFinancialTransactionById(id);
  }
}
