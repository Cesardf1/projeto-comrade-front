import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { FinancialTransactionManyModel } from '../../models/financial-transaction-many.model';
import { FinancialTransactionRepository } from '../../repositories/financial-transaction.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetFinancialTransactionByIdUsecase
  implements UseCase<string, SingleResultModel<FinancialTransactionManyModel>>
{
  constructor(private systemUserRepository: FinancialTransactionRepository) {}

  execute(id: string): Observable<SingleResultModel<FinancialTransactionManyModel>> {
    return this.systemUserRepository.getFinancialTransactionById(id);
  }
}
