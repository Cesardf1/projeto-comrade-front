import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { SystemUserSystemPermissionModel } from '../../models/system-user-system-permission.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllSystemUserWithPermissionsUsecase
  implements UseCase<PageFilterModel, PageResultModel<SystemUserSystemPermissionModel>>
{
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<SystemUserSystemPermissionModel>> {
    return this.systemUserRepository.getAllWithPermissions(filter);
  }
}
