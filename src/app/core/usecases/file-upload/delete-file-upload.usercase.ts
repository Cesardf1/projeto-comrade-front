import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { FileUploadRepository } from '../../repositories/file-upload.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteFileUploadUsercase implements UseCase<number, void> {
  constructor(private fileUploadRepository: FileUploadRepository) {}

  execute(id: number): Observable<void> {
    return this.fileUploadRepository.deleteFileUpload(id);
  }
}
