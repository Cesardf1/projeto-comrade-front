import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemUserSystemPermissionManageWebRepositoryMapper as SystemUserSystemPermissionManageWebRepositoryMapper } from './system-user-system-permission-manage-web-repository-mapper';
import { SystemUserSystemPermissionManageWebEntity } from './system-user-system-permission-manage-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { SystemUserSystemPermissionManageRepository } from 'src/app/core/repositories/system-user-system-permission-manage.repository';
import { SystemUserSystemPermissionManageModel } from 'src/app/core/models/system-user-system-permission-manage.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserSystemPermissionManageWebRepository extends SystemUserSystemPermissionManageRepository {
  mapper = new SystemUserSystemPermissionManageWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getSystemUserSystemPermissionManageById(
    id: string
  ): Observable<SingleResultModel<SystemUserSystemPermissionManageModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<SystemUserSystemPermissionManageWebEntity>>(
        `${environment.SYSTEMUSERSYSTEMROLE}system-user-system-permission-manage/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllSystemUserSystemPermissionManage(
    filter: PageFilterModel
  ): Observable<PageResultModel<SystemUserSystemPermissionManageModel>> {
    var request = this.http
      .getAll<PageResultModel<SystemUserSystemPermissionManageWebEntity>>(
        `${
          environment.SYSTEMUSERSYSTEMROLE
        }system-user-system-permission-manage/get-all${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  postSystemUserSystemPermissionManage(
    param: SystemUserSystemPermissionManageModel
  ): Observable<SystemUserSystemPermissionManageModel> {
    return this.http
      .post<SystemUserSystemPermissionManageWebEntity>(
        `${environment.SYSTEMUSERSYSTEMROLE}system-user-system-permission-manage/create`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putSystemUserSystemPermissionManage(param: SystemUserSystemPermissionManageModel) {
    return this.http
      .put<void>(
        `${environment.SYSTEMUSERSYSTEMROLE}system-user-system-permission-manage/edit`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => x.data));
  }

  deleteSystemUserSystemPermissionManage(id: string): Observable<void> {
    return this.http
      .delete<void>(
        `${environment.SYSTEMUSERSYSTEMROLE}system-user-system-permission-manage/delete/${id}`,
        id
      )
      .pipe(map((x) => x.data));
  }
}
