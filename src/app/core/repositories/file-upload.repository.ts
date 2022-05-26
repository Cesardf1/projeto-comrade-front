import { Observable } from 'rxjs';
import { FileUploadModel } from '../models/file-upload.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class FileUploadRepository {
  abstract getFileUploadById(id: number): Observable<SingleResultModel<FileUploadModel>>;
  abstract getAllFileUpload(filter: PageFilterModel): Observable<PageResultModel<FileUploadModel>>;
  abstract postFileUpload(param: FileUploadModel): Observable<FileUploadModel>;
  abstract putFileUpload(param: FileUploadModel): Observable<void>;
  abstract deleteFileUpload(id: number): Observable<void>;
}
