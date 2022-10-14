import { Mapper } from '../../../core/utils/bases/mapper';
import { SystemRoleSystemPermissionManageWebEntity } from './system-role-system-permission-manage-web-entity';
import { SystemRoleSystemPermissionManageModel } from 'src/app/core/models/system-role-system-permission-manage.model';
export class SystemRoleSystemPermissionManageWebRepositoryMapper extends Mapper<
  SystemRoleSystemPermissionManageWebEntity,
  SystemRoleSystemPermissionManageModel
> {
  mapFrom(param: SystemRoleSystemPermissionManageWebEntity): SystemRoleSystemPermissionManageModel {
    return {
      id: param.id,
      permissions: param.permissions,
    };
  }

  mapTo(param: SystemRoleSystemPermissionManageModel): SystemRoleSystemPermissionManageWebEntity {
    return {
      id: param.id,
      permissions: param.permissions,
    };
  }
}
