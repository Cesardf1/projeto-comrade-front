import { Observable } from 'rxjs';
import { BankModel } from '../models/bank.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class BankRepository {
  abstract getBankById(id: string): Observable<SingleResultModel<BankModel>>;
  abstract getAllBank(filter: PageFilterModel): Observable<PageResultModel<BankModel>>;
  abstract postBank(param: BankModel): Observable<BankModel>;
  abstract putBank(param: BankModel): Observable<void>;
  abstract deleteBank(id: string): Observable<void>;
}
