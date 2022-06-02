import { Mapper } from '../../../core/utils/bases/mapper';
import { FinancialTransactionManyWebEntity } from './financial-transaction-many-web-entity';
import { FinancialTransactionManyModel } from 'src/app/core/models/financial-transaction-many.model';

export class FinancialTransactionManyWebRepositoryMapper extends Mapper<
  FinancialTransactionManyWebEntity,
  FinancialTransactionManyModel
> {
  mapFrom(param: FinancialTransactionManyWebEntity): FinancialTransactionManyModel {
    return {
      name: param.name,
    };
  }
  mapTo(param: FinancialTransactionManyModel): FinancialTransactionManyWebEntity {
    return {
      name: param.name,
    };
  }
}
