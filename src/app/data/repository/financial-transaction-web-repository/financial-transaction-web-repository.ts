import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialTransactionWebRepositoryMapper as FinancialTransactionWebRepositoryMapper } from './financial-transaction-web-repository-mapper';
import { FinancialTransactionWebEntity } from './financial-transaction-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { FinancialTransactionRepository } from 'src/app/core/repositories/financial-transaction.repository';
import { FinancialTransactionModel } from 'src/app/core/models/financial-transaction.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class FinancialTransactionWebRepository extends FinancialTransactionRepository {
  mapper = new FinancialTransactionWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getFinancialTransactionById(
    id: number
  ): Observable<SingleResultModel<FinancialTransactionModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<FinancialTransactionWebEntity>>(
        `${environment.FILEUPLOAD}financial-transaction/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllFinancialTransaction(
    filter: PageFilterModel
  ): Observable<PageResultModel<FinancialTransactionModel>> {
    var request = this.http
      .getAll<PageResultModel<FinancialTransactionWebEntity>>(
        `${environment.FILEUPLOAD}financial-transaction/get-all${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  postFinancialTransaction(param: FinancialTransactionModel) {
    var request = this.http
      .post<FinancialTransactionWebEntity>(
        `${environment.FILEUPLOAD}financial-transaction/register-transactions`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
    request.subscribe();

    return request;
  }

  putFinancialTransaction(param: FinancialTransactionModel) {
    return this.http
      .put<void>(`${environment.FILEUPLOAD}financial-transaction/edit`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteFinancialTransaction(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.FILEUPLOAD}financial-transaction/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
