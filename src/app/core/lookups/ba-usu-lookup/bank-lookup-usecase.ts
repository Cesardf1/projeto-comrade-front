import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../utils/bases/use-case';
import { BankLookupRepository } from './bank-lookup.repository';
import { LookupModel } from '../../models/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class BankLookupUsecase implements UseCase<void, LookupModel[]> {
  constructor(private lookupRepository: BankLookupRepository) {}

  execute(): Observable<LookupModel[]> {
    return this.lookupRepository.GetAll();
  }
}
