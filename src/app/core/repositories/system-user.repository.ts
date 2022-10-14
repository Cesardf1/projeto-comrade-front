import { Observable } from 'rxjs';
import { SystemUserSystemPermissionManageModel } from '../models/system-user-system-permission-manage.model';
import { SystemUserSystemPermissionModel } from '../models/system-user-system-permission.model';
import { SystemUserSystemRoleManageModel } from '../models/system-user-system-role-manage.model';
import { SystemUserSystemRoleModel } from '../models/system-user-system-role.model';
import { SystemUserModel } from '../models/system-user.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class SystemUserRepository {
  abstract getSystemUserById(id: string): Observable<SingleResultModel<SystemUserModel>>;
  abstract getAllSystemUser(filter: PageFilterModel): Observable<PageResultModel<SystemUserModel>>;
  abstract createSystemUser(param: SystemUserModel): Observable<SystemUserModel>;
  abstract editSystemUser(param: SystemUserModel): Observable<void>;
  abstract deleteSystemUser(id: string): Observable<void>;
  abstract getAllWithRoles(
    filter: PageFilterModel
  ): Observable<PageResultModel<SystemUserSystemRoleModel>>;
  abstract manageRoles(param: SystemUserSystemRoleManageModel): Observable<void>;
  abstract getAllWithPermissions(
    filter: PageFilterModel
  ): Observable<PageResultModel<SystemUserSystemPermissionModel>>;
  abstract managePermissions(param: SystemUserSystemPermissionManageModel): Observable<void>;
}
