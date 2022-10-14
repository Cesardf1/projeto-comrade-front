import { SystemPermissionModel } from './system-permission.model';
import { SystemRoleModel } from './system-role.model';

export interface SystemRoleSystemPermissionModel extends SystemRoleModel {
  systemPermissions: SystemPermissionModel[];
}
