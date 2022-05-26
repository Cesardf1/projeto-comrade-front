import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { FileUploadModel } from '../../models/file-upload.model';
import { FileUploadRepository } from '../../repositories/file-upload.repository';

@Injectable({
  providedIn: 'root',
})
export class PutFileUploadUsecase implements UseCase<FileUploadModel, void> {
  constructor(private systemUserRepository: FileUploadRepository) {}

  execute(params: FileUploadModel): Observable<void> {
    return this.systemUserRepository.putFileUpload(params);
  }
}
