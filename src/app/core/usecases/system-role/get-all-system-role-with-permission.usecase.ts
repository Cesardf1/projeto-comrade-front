import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { SystemRoleRepository } from '../../repositories/system-role.repository';
import { SystemRoleSystemPermissionModel } from '../../models/system-role-system-permission.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllSystemRoleWithPermissionUsecase
  implements UseCase<PageFilterModel, PageResultModel<SystemRoleSystemPermissionModel>>
{
  constructor(private systemRoleRepository: SystemRoleRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<SystemRoleSystemPermissionModel>> {
    return this.systemRoleRepository.getAllWithPermissions(filter);
  }
}
