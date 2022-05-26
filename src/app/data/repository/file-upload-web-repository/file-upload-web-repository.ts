import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadWebRepositoryMapper as FileUploadWebRepositoryMapper } from './file-upload-web-repository-mapper';
import { FileUploadWebEntity } from './file-upload-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { FileUploadRepository } from 'src/app/core/repositories/file-upload.repository';
import { FileUploadModel } from 'src/app/core/models/file-upload.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class FileUploadWebRepository extends FileUploadRepository {
  mapper = new FileUploadWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getFileUploadById(id: number): Observable<SingleResultModel<FileUploadModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<FileUploadWebEntity>>(
        `${environment.SYSTEMUSER}file-upload/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllFileUpload(filter: PageFilterModel): Observable<PageResultModel<FileUploadModel>> {
    var request = this.http
      .getAll<PageResultModel<FileUploadWebEntity>>(
        `${environment.SYSTEMUSER}file-upload/get-all${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  postFileUpload(param: FileUploadModel) {
    var oto = this.http
      .post<FileUploadWebEntity>(
        `${environment.FILEUPLOAD}file-upload/teste-post-cesar`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));

    oto.subscribe();

    var teste = this.http
      .post<FileUploadWebEntity>(
        `${environment.SYSTEMUSER}file-upload/create`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));

    return teste;
  }

  putFileUpload(param: FileUploadModel) {
    return this.http
      .put<void>(`${environment.SYSTEMUSER}file-upload/edit`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteFileUpload(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.SYSTEMUSER}file-upload/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
