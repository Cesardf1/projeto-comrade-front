import { Mapper } from '../../../core/utils/bases/mapper';
import { SystemUserSystemPermissionWebEntity } from './system-user-system-permission-web-entity';
import { SystemUserSystemPermissionModel } from 'src/app/core/models/system-user-system-permission.model';

export class SystemUserSystemPermissionWebRepositoryMapper extends Mapper<
  SystemUserSystemPermissionWebEntity,
  SystemUserSystemPermissionModel
> {
  mapFrom(param: SystemUserSystemPermissionWebEntity): SystemUserSystemPermissionModel {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      registration: param.registration,
      registerDate: param.registerDate,
      systemPermissions: param.systemPermissions,
    };
  }

  mapTo(param: SystemUserSystemPermissionModel): SystemUserSystemPermissionWebEntity {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      registration: param.registration,
      registerDate: param.registerDate,
      systemPermissions: param.systemPermissions,
    };
  }
}
