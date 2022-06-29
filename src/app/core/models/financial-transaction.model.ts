export interface FinancialTransactionModel {
  id?: string;
  tipo: string;
  data: string;
  valor: number;
  cpf: string;
  cartao: string;
  hora: string;
  donoDaLoja: string;
  nomeDaLoja: string;
}
