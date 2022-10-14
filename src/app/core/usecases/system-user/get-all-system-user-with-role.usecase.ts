import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { SystemUserSystemRoleModel } from '../../models/system-user-system-role.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllSystemUserWithRolesUsecase
  implements UseCase<PageFilterModel, PageResultModel<SystemUserSystemRoleModel>>
{
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<SystemUserSystemRoleModel>> {
    return this.systemUserRepository.getAllWithRoles(filter);
  }
}
