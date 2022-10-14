import { Mapper } from '../../../core/utils/bases/mapper';
import { SystemUserSystemPermissionManageWebEntity } from './system-user-system-permission-manage-web-entity';
import { SystemUserSystemPermissionManageModel } from 'src/app/core/models/system-user-system-permission-manage.model';
export class SystemUserSystemPermissionManageWebRepositoryMapper extends Mapper<
  SystemUserSystemPermissionManageWebEntity,
  SystemUserSystemPermissionManageModel
> {
  mapFrom(param: SystemUserSystemPermissionManageWebEntity): SystemUserSystemPermissionManageModel {
    return {
      id: param.id,
      systemPermissions: param.systemPermissions,
    };
  }

  mapTo(param: SystemUserSystemPermissionManageModel): SystemUserSystemPermissionManageWebEntity {
    return {
      id: param.id,
      systemPermissions: param.systemPermissions,
    };
  }
}
