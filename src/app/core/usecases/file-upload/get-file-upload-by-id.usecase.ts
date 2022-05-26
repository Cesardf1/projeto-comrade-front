import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { FileUploadModel } from '../../models/file-upload.model';
import { FileUploadRepository } from '../../repositories/file-upload.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetFileUploadByIdUsecase
  implements UseCase<number, SingleResultModel<FileUploadModel>>
{
  constructor(private systemUserRepository: FileUploadRepository) {}

  execute(id: number): Observable<SingleResultModel<FileUploadModel>> {
    return this.systemUserRepository.getFileUploadById(id);
  }
}
