import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../utils/bases/use-case';
import { FinancialTransactionLookupRepository } from './financial-transaction-lookup.repository';
import { LookupModel } from '../../models/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class FinancialTransactionLookupUsecase implements UseCase<void, LookupModel[]> {
  constructor(private lookupRepository: FinancialTransactionLookupRepository) {}

  execute(): Observable<LookupModel[]> {
    return this.lookupRepository.GetAll();
  }
}
