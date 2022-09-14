import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { BankWebRepositoryMapper as BankWebRepositoryMapper } from './bank-web-repository-mapper';
import { BankWebEntity } from './bank-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { BankRepository } from 'src/app/core/repositories/bank.repository';
import { BankModel } from 'src/app/core/models/bank.model';
import { BranchModel } from 'src/app/core/models/branch.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class BankWebRepository extends BankRepository {
  mockBranch1: BranchModel = {
    adress: 'vila A',
    code: '4021',
  };
  mockBranch2: BranchModel = {
    adress: 'vila B',
    code: '5491',
  };
  mockBranch3: BranchModel = {
    adress: 'vila C',
    code: '7853',
  };
  mockTeste: BankModel = {
    name: 'Santander',
    id: 'idTeste',
    branches: [this.mockBranch1, this.mockBranch2, this.mockBranch3],
  };

  mockBranch4: BranchModel = {
    adress: 'vila A',
    code: '4021',
  };
  mockBranch5: BranchModel = {
    adress: 'vila B',
    code: '5491',
  };
  mockBranch6: BranchModel = {
    adress: 'vila C',
    code: '7853',
  };
  mockTeste2: BankModel = {
    name: 'Nubank',
    id: 'blabla',
    branches: [this.mockBranch1, this.mockBranch2, this.mockBranch3],
  };

  postManyBank(param: BankModel): Observable<BankModel> {
    throw new Error('Method not implemented.');
  }
  mapper = new BankWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getBankById(id: string): Observable<SingleResultModel<BankModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<BankWebEntity>>(`${environment.BANK}bank/get-by-id`, id)
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllBank(filter: PageFilterModel): Observable<PageResultModel<BankModel>> {
    let teste: PageResultModel<BankModel> = {};

    teste.data = [this.mockTeste, this.mockTeste2];

    teste.data.map((x) => {
      var oto = x.branches.flatMap((x) => x.code);
      var ota = x.branches.flatMap((x) => x.adress);
      x.branchCodeView = oto.join();
      x.branchAdressView = ota.join();
    });
    return scheduled([teste], asyncScheduler);
    var request = this.http
      .getAll<PageResultModel<BankWebEntity>>(
        `${environment.BANK}financial-transaction/get-all${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  postBank(param: BankModel) {
    console.log(param);
    var request = this.http
      .post<BankWebEntity>(`${environment.BANK}bank/create`, this.mapper.mapTo(param))
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
    request.subscribe();

    return request;
  }

  putBank(param: BankModel) {
    return this.http
      .put<void>(`${environment.BANK}bank/edit`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteBank(id: string): Observable<void> {
    return this.http
      .delete<void>(`${environment.BANK}bank/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
