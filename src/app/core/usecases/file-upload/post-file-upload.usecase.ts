import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { FileUploadModel } from '../../models/file-upload.model';
import { FileUploadRepository } from '../../repositories/file-upload.repository';

@Injectable({
  providedIn: 'root',
})
export class PostFileUploadUsecase implements UseCase<FileUploadModel, FileUploadModel> {
  constructor(private systemUserRepository: FileUploadRepository) {}

  execute(params: FileUploadModel): Observable<FileUploadModel> {
    console.log('teste 2');
    return this.systemUserRepository.postFileUpload(params);
  }
}
