import { Component, OnInit } from '@angular/core';
import { PostManyFinancialTransactionUsecase } from 'src/app/core/usecases/financial-transaction/post-many-financial-transaction.usecase';
import { PostFinancialTransactionUsecase } from 'src/app/core/usecases/financial-transaction/post-financial-transaction.usecase';
import { FinancialTransactionManyModel } from 'src/app/core/models/financial-transaction-many.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { FinancialTransactionModel } from 'src/app/core/models/financial-transaction.model';

@Component({
  selector: 'app-financial-transaction',
  templateUrl: 'financial-transaction.component.html',
  styleUrls: ['financial-transaction.component.scss'],
  providers: [],
})
export class FinancialTransactionComponent implements OnInit {
  fileName = '';
  dataSource!: FinancialTransactionManyModel[];
  infoArray?: FinancialTransactionManyModel;
  info?: FinancialTransactionModel;

  formString = '';

  constructor(
    private postManyFinancialTransactionUseCase: PostManyFinancialTransactionUsecase,
    private postFinancialTransactionUseCase: PostFinancialTransactionUsecase,
    private http: HttpClient
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
      nomeDaLoja: this.formTransaction.get('nomeDaLoja')?.value
    };
    console.log("onSubmit");
    console.log(this.info);
    this.postFinancialTransactionUseCase.execute(this.info).subscribe();
  }
}
