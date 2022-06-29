import { Observable } from 'rxjs';
import { LookupModel } from '../../models/lookup.model';

export abstract class BankLookupRepository {
  abstract GetAll(): Observable<LookupModel[]>;
  abstract GetAllByName(nome: string): Observable<LookupModel[]>;
}
