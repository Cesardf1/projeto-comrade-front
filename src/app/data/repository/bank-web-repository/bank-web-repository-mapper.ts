import { Mapper } from '../../../core/utils/bases/mapper';
import { BankWebEntity } from './bank-web-entity';
import { BankModel } from 'src/app/core/models/bank.model';

export class BankWebRepositoryMapper extends Mapper<BankWebEntity, BankModel> {
  mapFrom(param: BankWebEntity): BankModel {
    return {
      id: param.id,
      branches: param.branches,
      name: param.name,
    };
  }
  mapTo(param: BankModel): BankWebEntity {
    return {
      id: param.id,
      branches: param.branches,
      name: param.name,
    };
  }
}
