import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { BankModel } from '../../models/bank.model';
import { BankRepository } from '../../repositories/bank.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllBankUsecase implements UseCase<PageFilterModel, PageResultModel<BankModel>> {
  constructor(private financialTransactionRepository: BankRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<BankModel>> {
    return this.financialTransactionRepository.getAllBank(filter);
  }
}
