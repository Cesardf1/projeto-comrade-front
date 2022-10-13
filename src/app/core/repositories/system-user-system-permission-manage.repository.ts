import { Observable } from 'rxjs';
import { SystemUserSystemPermissionManageModel } from '../models/system-user-system-permission-manage.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class SystemUserSystemPermissionManageRepository {
  abstract getSystemUserSystemPermissionManageById(
    id: string
  ): Observable<SingleResultModel<SystemUserSystemPermissionManageModel>>;
  abstract getAllSystemUserSystemPermissionManage(
    filter: PageFilterModel
  ): Observable<PageResultModel<SystemUserSystemPermissionManageModel>>;
  abstract postSystemUserSystemPermissionManage(
    param: SystemUserSystemPermissionManageModel
  ): Observable<SystemUserSystemPermissionManageModel>;
  abstract putSystemUserSystemPermissionManage(
    param: SystemUserSystemPermissionManageModel
  ): Observable<void>;
  abstract deleteSystemUserSystemPermissionManage(id: string): Observable<void>;
}
