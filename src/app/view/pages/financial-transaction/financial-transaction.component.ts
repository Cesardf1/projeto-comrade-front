import { Component, OnInit } from '@angular/core';
import { GetAllFinancialTransactionUsecase } from '../../../core/usecases/financial-transaction/get-all-financial-transaction.usecase';
import { PageResultModel } from '../../../core/utils/responses/page-result.model';
import { PostFinancialTransactionUsecase } from 'src/app/core/usecases/financial-transaction/post-financial-transaction.usecase';
import { FinancialTransactionModel } from 'src/app/core/models/financial-transaction.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-financial-transaction',
  templateUrl: 'financial-transaction.component.html',
  styleUrls: ['financial-transaction.component.scss'],
  providers: [],
})
export class FinancialTransactionComponent implements OnInit {
  fileName = '';
  dataSource!: FinancialTransactionModel[];
  data?: FinancialTransactionModel;
  testLines: string[] = [];
  constructor(
    private getAllFinancialTransaction: GetAllFinancialTransactionUsecase,
    private postFinancialTransactionUseCase: PostFinancialTransactionUsecase,
    private http: HttpClient
  ) {}

  lines?: any;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
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
    this.data = {
      name: this.lines,
    };
    console.log('teste 1');
    this.postFinancialTransactionUseCase.execute(this.data).subscribe();

    this.getAllFinancialTransaction
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<FinancialTransactionModel>) => {
        this.dataSource = grid.data!;
      });
  }
}
