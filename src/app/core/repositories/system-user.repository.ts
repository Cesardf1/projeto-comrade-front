import { Observable } from 'rxjs';
import { FileUploadModel } from '../models/file-upload.model';
import { SystemUserModel } from '../models/system-user.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class SystemUserRepository {
  abstract getSystemUserById(id: number): Observable<SingleResultModel<SystemUserModel>>;
  abstract getAllSystemUser(filter: PageFilterModel): Observable<PageResultModel<SystemUserModel>>;
  abstract postSystemUser(param: FileUploadModel): Observable<FileUploadModel>;
  abstract putSystemUser(param: SystemUserModel): Observable<void>;
  abstract deleteSystemUser(id: number): Observable<void>;
}
