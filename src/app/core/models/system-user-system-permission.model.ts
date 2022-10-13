import { SystemPermissionModel } from './system-permission.model';
import { SystemUserModel } from './system-user.model';

export interface SystemUserSystemPermissionModel extends SystemUserModel {
  systemPermissions: SystemPermissionModel[];
}
