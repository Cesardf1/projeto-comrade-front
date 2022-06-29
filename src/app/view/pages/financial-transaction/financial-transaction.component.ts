import { Component, OnInit } from '@angular/core';
import { PostManyFinancialTransactionUsecase } from 'src/app/core/usecases/financial-transaction/post-many-financial-transaction.usecase';
import { DeleteFinancialTransactionUsecase } from 'src/app/core/usecases/financial-transaction/delete-financial-transaction.usecase';
import { PostFinancialTransactionUsecase } from 'src/app/core/usecases/financial-transaction/post-financial-transaction.usecase';
import { GetAllFinancialTransactionUsecase } from 'src/app/core/usecases/financial-transaction/get-all-financial-transaction.usecase';
import { FinancialTransactionManyModel } from 'src/app/core/models/financial-transaction-many.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';

import { FormGroup, FormControl } from '@angular/forms';
import { FinancialTransactionModel } from 'src/app/core/models/financial-transaction.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PutFinancialTransactionUsecase } from 'src/app/core/usecases/financial-transaction/put-financial-transaction.usecase';

@Component({
  selector: 'app-financial-transaction',
  templateUrl: 'financial-transaction.component.html',
  styleUrls: ['financial-transaction.component.scss'],
  providers: [],
})
export class FinancialTransactionComponent implements OnInit {
  fileName = '';
  dataSource!: FinancialTransactionModel[];
  infoArray?: FinancialTransactionManyModel;
  info?: FinancialTransactionModel;
  pageModel?: PageFilterModel;
  InfoFromGet?: PageResultModel<FinancialTransactionModel>;

  formString = '';

  constructor(
    private postManyFinancialTransactionUseCase: PostManyFinancialTransactionUsecase,
    private postFinancialTransactionUseCase: PostFinancialTransactionUsecase,
    private putFinancialTransactionUseCase: PutFinancialTransactionUsecase,
    private getAllFinancialTransactionUseCase: GetAllFinancialTransactionUsecase,
    private deleteFinancialTransactionUseCase: DeleteFinancialTransactionUsecase
  ) {}

  lines?: any;

  formTransaction = new FormGroup({
    tipo: new FormControl(''),
    data: new FormControl(''),
    valor: new FormControl(''),
    cpf: new FormControl(''),
    cartao: new FormControl(''),
    hora: new FormControl(''),
    donoDaLoja: new FormControl(''),
    nomeDaLoja: new FormControl(''),
  });

  ngOnInit(): void {}

  onFileSelected($event: { target: any }): any {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    var oto: string[];
    var p1 = new Promise(function (resolve, reject) {
      myReader.onloadend = function (e) {
        console.log(myReader.result);
        const fileTeste = myReader.result;
        oto = (<string>fileTeste).split(/\r\n|\n/);
        resolve(oto);
      };
    });

    p1.then((val) => {
      console.log(val);
      this.lines = val;
      console.log(this.lines);
      this.PostFile();
    });

    this.lines = [];

    myReader.readAsText(file);
  }

  PostFile() {
    this.infoArray = {
      name: this.lines,
    };
    console.log('teste 1');
    this.postManyFinancialTransactionUseCase.execute(this.infoArray).subscribe();
  }

  onSubmit() {
    this.info = {
      tipo: this.formTransaction.get('tipo')?.value,
      data: this.formTransaction.get('data')?.value,
      valor: this.formTransaction.get('valor')?.value,
      cpf: this.formTransaction.get('cpf')?.value,
      cartao: this.formTransaction.get('cartao')?.value,
      hora: this.formTransaction.get('hora')?.value,
      donoDaLoja: this.formTransaction.get('donoDaLoja')?.value,
      nomeDaLoja: this.formTransaction.get('nomeDaLoja')?.value,
    };
    this.postFinancialTransactionUseCase.execute(this.info).subscribe();
  }

  getButton() {
    this.getAllFinancialTransactionUseCase
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<FinancialTransactionModel>) => {
        console.log(grid.data);
        this.dataSource = grid.data!;
      });
  }

  deleteRow(e: any): void {
    var rowIndex = e.component.getRowIndexByKey(e.key);

    console.log(e);
    this.deleteFinancialTransactionUseCase.execute(e.key).subscribe();
  }

  editRow(e: any): void {
    console.log('EDIT');
    this.putFinancialTransactionUseCase.execute(e.data).subscribe();
  }

  addRow(e: any): void {
    console.log('ADD ROW');
    this.info = {
      //id: e.key,
      tipo: e.data.tipo,
      data: e.data.data,
      valor: e.data.valor,
      cpf: e.data.cpf,
      cartao: e.data.cartao,
      hora: e.data.hora,
      donoDaLoja: e.data.donoDaLoja,
      nomeDaLoja: e.data.nomeDaLoja,
    };
    this.postFinancialTransactionUseCase.execute(this.info).subscribe();
  }
}
