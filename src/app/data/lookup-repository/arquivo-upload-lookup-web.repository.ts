import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { map } from 'rxjs/operators';
import { LookupModel } from 'src/app/core/models/lookup.model';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { FileUploadLookupRepository } from '../../core/lookups/ba-usu-lookup/file-upload-lookup.repository';
import { LookupWebEntity } from './helpers/lookup-web-entity';
import { LookupWebRepositoryMapper } from './helpers/lookup-web-repository-mapper';

@Injectable({
  providedIn: 'root',
})
export class FileUploadLookupWebRepository extends FileUploadLookupRepository {
  mapper = new LookupWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  GetAll(): Observable<LookupModel[]> {
    return this.http
      .getAll<LookupWebEntity[]>(`${environment.FILEUPLOAD}common/lookup-file-upload`)
      .pipe(
        map((item) => {
          return item.data;
        })
      )
      .pipe(
        map((item: any) => {
          return this.mapper.mapFromList(item.data);
        })
      );
  }

  GetAllByName(nome: string): Observable<LookupModel[]> {
    return this.http
      .getAll<LookupWebEntity[]>(
        `${environment.FILEUPLOAD}common/lookup-predicate-file-upload-by-name/${nome}`
      )
      .pipe(
        map((item) => {
          return item.data;
        })
      )
      .pipe(
        map((item: any) => {
          return this.mapper.mapFromList(item.data);
        })
      );
  }
}
