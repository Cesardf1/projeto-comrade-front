import { Mapper } from '../../../core/utils/bases/mapper';
import { FileUploadWebEntity } from './file-upload-web-entity';
import { FileUploadModel } from 'src/app/core/models/file-upload.model';

export class FileUploadWebRepositoryMapper extends Mapper<FileUploadWebEntity, FileUploadModel> {
  mapFrom(param: FileUploadWebEntity): FileUploadModel {
    return {
      name: param.name,
    };
  }
  mapTo(param: FileUploadModel): FileUploadWebEntity {
    return {
      name: param.name,
    };
  }
}
