import { Observable } from 'rxjs';
import { FinancialTransactionManyModel } from '../models/financial-transaction-many.model';
import { FinancialTransactionModel } from '../models/financial-transaction.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class FinancialTransactionRepository {
  abstract getFinancialTransactionById(
    id: number
  ): Observable<SingleResultModel<FinancialTransactionManyModel>>;
  abstract getAllFinancialTransaction(
    filter: PageFilterModel
  ): Observable<PageResultModel<FinancialTransactionModel>>;
  abstract postManyFinancialTransaction(
    param: FinancialTransactionManyModel
  ): Observable<FinancialTransactionManyModel>;
  abstract postFinancialTransaction(
    param: FinancialTransactionModel
  ): Observable<FinancialTransactionModel>;
  abstract putFinancialTransaction(param: FinancialTransactionManyModel): Observable<void>;
  abstract deleteFinancialTransaction(id: number): Observable<void>;
}
