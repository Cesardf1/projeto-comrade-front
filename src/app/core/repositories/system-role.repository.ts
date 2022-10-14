import { Observable } from 'rxjs';
import { SystemRoleSystemPermissionManageModel } from '../models/system-role-system-permission-manage.model';
import { SystemRoleSystemPermissionModel } from '../models/system-role-system-permission.model';
import { SystemRoleModel } from '../models/system-role.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class SystemRoleRepository {
  abstract getSystemRoleById(id: string): Observable<SingleResultModel<SystemRoleModel>>;
  abstract getAllSystemRole(filter: PageFilterModel): Observable<PageResultModel<SystemRoleModel>>;
  abstract postSystemRole(param: SystemRoleModel): Observable<SystemRoleModel>;
  abstract putSystemRole(param: SystemRoleModel): Observable<void>;
  abstract deleteSystemRole(id: string): Observable<void>;
  abstract getAllWithPermissions(
    filter: PageFilterModel
  ): Observable<PageResultModel<SystemRoleSystemPermissionModel>>;
  abstract managePermissions(param: SystemRoleSystemPermissionManageModel): Observable<void>;
}
