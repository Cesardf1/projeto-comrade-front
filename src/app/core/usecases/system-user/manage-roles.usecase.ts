import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { SystemUserSystemRoleManageModel } from '../../models/system-user-system-role-manage.model';

@Injectable({
  providedIn: 'root',
})
export class ManageRolesUsecase implements UseCase<SystemUserSystemRoleManageModel, void> {
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(params: SystemUserSystemRoleManageModel): Observable<void> {
    return this.systemUserRepository.manageRoles(params);
  }
}