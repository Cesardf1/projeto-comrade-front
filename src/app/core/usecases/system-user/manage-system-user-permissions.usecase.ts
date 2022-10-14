import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { SystemUserSystemPermissionManageModel } from '../../models/system-user-system-permission-manage.model';

@Injectable({
  providedIn: 'root',
})
export class ManageSystemUserPermissionsUsecase
  implements UseCase<SystemUserSystemPermissionManageModel, void>
{
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(params: SystemUserSystemPermissionManageModel): Observable<void> {
    return this.systemUserRepository.managePermissions(params);
  }
}
