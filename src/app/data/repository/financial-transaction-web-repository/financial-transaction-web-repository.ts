import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialTransactionManyWebRepositoryMapper as FinancialTransactionManyWebRepositoryMapper } from './financial-transaction-many-web-repository-mapper';
import { FinancialTransactionWebRepositoryMapper as FinancialTransactionWebRepositoryMapper } from './financial-transaction-web-repository-mapper';
import { FinancialTransactionManyWebEntity } from './financial-transaction-many-web-entity';
import { FinancialTransactionWebEntity } from './financial-transaction-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { FinancialTransactionRepository } from 'src/app/core/repositories/financial-transaction.repository';
import { FinancialTransactionManyModel } from 'src/app/core/models/financial-transaction-many.model';
import { FinancialTransactionModel } from 'src/app/core/models/financial-transaction.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class FinancialTransactionWebRepository extends FinancialTransactionRepository {
  mapperMany = new FinancialTransactionManyWebRepositoryMapper();
  mapper = new FinancialTransactionWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getFinancialTransactionById(
    id: string
  ): Observable<SingleResultModel<FinancialTransactionManyModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<FinancialTransactionManyWebEntity>>(
        `${environment.REGISTERTRANSACTION}financial-transaction/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapperMany.responseWebMapFrom(x.data)));
  }

  getAllFinancialTransaction(
    filter: PageFilterModel
  ): Observable<PageResultModel<FinancialTransactionModel>> {
    var request = this.http
      .getAll<PageResultModel<FinancialTransactionWebEntity>>(
        `${environment.REGISTERTRANSACTION}financial-transaction/get-all${makeParamFilterGrid(
          filter
        )}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  postManyFinancialTransaction(param: FinancialTransactionManyModel) {
    console.log(param);
    var request = this.http
      .post<FinancialTransactionManyWebEntity>(
        `${environment.REGISTERTRANSACTION}financial-transaction/register-many-transactions`,
        this.mapperMany.mapTo(param)
      )
      .pipe(map((x) => this.mapperMany.mapFrom(x.data)));
    request.subscribe();

    return request;
  }

  postFinancialTransaction(param: FinancialTransactionModel) {
    console.log('postSINGLE');
    var request = this.http
      .post<FinancialTransactionWebEntity>(
        `${environment.REGISTERTRANSACTION}financial-transaction/register-transaction`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
    request.subscribe();

    return request;
  }

  putFinancialTransaction(param: FinancialTransactionModel) {
    return this.http
      .put<void>(
        `${environment.REGISTERTRANSACTION}financial-transaction/edit`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => x.data));
  }

  deleteFinancialTransaction(id: string): Observable<void> {
    return this.http
      .delete<void>(`${environment.REGISTERTRANSACTION}financial-transaction/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
