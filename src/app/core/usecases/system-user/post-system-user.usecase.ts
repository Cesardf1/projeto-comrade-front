import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { FileUploadModel } from '../../models/file-upload.model';

@Injectable({
  providedIn: 'root',
})
export class PostSystemUserUsecase implements UseCase<SystemUserModel, FileUploadModel> {
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(params: FileUploadModel): Observable<FileUploadModel> {
    return this.systemUserRepository.postSystemUser(params);
  }
}
