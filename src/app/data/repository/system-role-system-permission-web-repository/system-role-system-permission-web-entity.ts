import { SystemPermissionWebEntity } from '../system-permission-web-repository/system-permission-web-entity';
import { SystemRoleWebEntity } from '../system-role-web-repository/system-role-web-entity';

export interface SystemRoleSystemPermissionWebEntity extends SystemRoleWebEntity {
  systemPermissions: SystemPermissionWebEntity[];
}
