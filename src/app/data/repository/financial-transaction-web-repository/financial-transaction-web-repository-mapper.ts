import { Mapper } from '../../../core/utils/bases/mapper';
import { FinancialTransactionWebEntity } from './financial-transaction-web-entity';
import { FinancialTransactionModel } from 'src/app/core/models/financial-transaction.model';

export class FinancialTransactionWebRepositoryMapper extends Mapper<
  FinancialTransactionWebEntity,
  FinancialTransactionModel
> {
  mapFrom(param: FinancialTransactionWebEntity): FinancialTransactionModel {
    return {
      tipo : param.tipo,
      data :param.data,
      valor :param.valor,
      cpf :param.cpf,
      cartao :param.cartao,
      hora :param.hora,
      donoDaLoja :param.donoDaLoja,
      nomeDaLoja :param.nomeDaLoja
    };
  }
  mapTo(param: FinancialTransactionModel): FinancialTransactionWebEntity {
    return {
      tipo : param.tipo,
      data :param.data,
      valor :param.valor,
      cpf :param.cpf,
      cartao :param.cartao,
      hora :param.hora,
      donoDaLoja :param.donoDaLoja,
      nomeDaLoja :param.nomeDaLoja
    };
  }
}
