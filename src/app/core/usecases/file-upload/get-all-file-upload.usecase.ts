import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { FileUploadModel } from '../../models/file-upload.model';
import { FileUploadRepository } from '../../repositories/file-upload.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllFileUploadUsecase
  implements UseCase<PageFilterModel, PageResultModel<FileUploadModel>>
{
  constructor(private systemUserRepository: FileUploadRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<FileUploadModel>> {
    return this.systemUserRepository.getAllFileUpload(filter);
  }
}
