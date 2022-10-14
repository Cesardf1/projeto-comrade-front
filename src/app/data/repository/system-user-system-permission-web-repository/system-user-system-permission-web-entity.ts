import { SystemPermissionWebEntity } from '../system-permission-web-repository/system-permission-web-entity';
import { SystemUserWebEntity } from '../system-user-web-repository/system-user-web-entity';

export interface SystemUserSystemPermissionWebEntity extends SystemUserWebEntity {
  systemPermissions: SystemPermissionWebEntity[];
}
