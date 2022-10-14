import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemRoleRepository } from '../../repositories/system-role.repository';
import { SystemRoleSystemPermissionManageModel } from '../../models/system-role-system-permission-manage.model';

@Injectable({
  providedIn: 'root',
})
export class ManageSystemRolePermissionsUsecase
  implements UseCase<SystemRoleSystemPermissionManageModel, void>
{
  constructor(private systemRoleRepository: SystemRoleRepository) {}

  execute(params: SystemRoleSystemPermissionManageModel): Observable<void> {
    return this.systemRoleRepository.managePermissions(params);
  }
}
