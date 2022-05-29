import { Mapper } from '../../../core/utils/bases/mapper';
import { FinancialTransactionWebEntity } from './financial-transaction-web-entity';
import { FinancialTransactionModel } from 'src/app/core/models/financial-transaction.model';

export class FinancialTransactionWebRepositoryMapper extends Mapper<
  FinancialTransactionWebEntity,
  FinancialTransactionModel
> {
  mapFrom(param: FinancialTransactionWebEntity): FinancialTransactionModel {
    return {
      name: param.name,
    };
  }
  mapTo(param: FinancialTransactionModel): FinancialTransactionWebEntity {
    return {
      name: param.name,
    };
  }
}
