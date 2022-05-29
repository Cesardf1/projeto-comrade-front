import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../utils/bases/use-case';
import { FinancialTransactionLookupRepository } from './financial-transaction-lookup.repository';
import { LookupModel } from '../../models/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class FinancialTransactionLookupByNameUsecase implements UseCase<string, LookupModel[]> {
  constructor(private lookupRepository: FinancialTransactionLookupRepository) {}

  execute(nome: string): Observable<LookupModel[]> {
    return this.lookupRepository.GetAllByName(nome);
  }
}
