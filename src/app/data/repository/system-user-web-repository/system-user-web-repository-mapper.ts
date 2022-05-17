import { Mapper } from '../../../core/utils/bases/mapper';
import { SystemUserWebEntity } from './system-user-web-entity';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { FileUploadModel } from 'src/app/core/models/file-upload.model';
import { FileUploadWebEntity } from './file-upload-web-entity';

export class SystemUserWebRepositoryMapper extends Mapper<SystemUserWebEntity, SystemUserModel> {
  mapFrom(param: SystemUserWebEntity): SystemUserModel {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      registration: param.registration,
      registerDate: new Date(param.registerDate),
    };
  }

  mapFromTeste(param: FileUploadWebEntity): FileUploadModel {
    return {
      name: param.name,
    };
  }

  mapTo(param: SystemUserModel): SystemUserWebEntity {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      registration: param.registration,
      registerDate: param.registerDate,
    };
  }

  mapToTeste(param: FileUploadModel): FileUploadWebEntity {
    return {
      name: param.name,
    };
  }
}
