import { Mapper } from '../../../core/utils/bases/mapper';
import { SystemRoleSystemPermissionWebEntity } from './system-role-system-permission-web-entity';
import { SystemRoleSystemPermissionModel } from 'src/app/core/models/system-role-system-permission.model';

export class SystemRoleSystemPermissionWebRepositoryMapper extends Mapper<
  SystemRoleSystemPermissionWebEntity,
  SystemRoleSystemPermissionModel
> {
  mapFrom(param: SystemRoleSystemPermissionWebEntity): SystemRoleSystemPermissionModel {
    return {
      id: param.id,
      name: param.name,
      tag: param.tag,
      systemPermissions: param.systemPermissions,
    };
  }

  mapTo(param: SystemRoleSystemPermissionModel): SystemRoleSystemPermissionWebEntity {
    return {
      id: param.id,
      name: param.name,
      tag: param.tag,
      systemPermissions: param.systemPermissions,
    };
  }
}
