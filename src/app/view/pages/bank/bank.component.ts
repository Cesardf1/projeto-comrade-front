import { Component, OnInit } from '@angular/core';
import { BranchModel } from 'src/app/core/models/branch.model';
import { DeleteBankUsecase } from 'src/app/core/usecases/bank/delete-bank.usecase';
import { GetAllBankUsecase } from 'src/app/core/usecases/bank/get-all-bank.usecase';
import { PostBankUsecase } from 'src/app/core/usecases/bank/post-bank.usecase';
import { PutBankUsecase } from 'src/app/core/usecases/bank/put-bank.usecase';
import { BankModel } from '../../../core/models/bank.model';
import { PageResultModel } from '../../../core/utils/responses/page-result.model';

@Component({
  selector: 'app-bank',
  templateUrl: 'bank.component.html',
  styleUrls: ['bank.component.scss'],
  providers: [],
})
export class BankComponent implements OnInit {
  dataSource!: BankModel[];
  info?: BankModel;
  branchList: BranchModel[] = [];
  isFieldVisible: boolean = false;
  constructor(
    private getAllBankUseCase: GetAllBankUsecase,
    private postBankUseCase: PostBankUsecase,
    private putBankUseCase: PutBankUsecase,
    private deleteBankUseCase: DeleteBankUsecase
  ) {}

  ngOnInit(): void {
    this.isFieldVisible = false;
  }

  getButton() {
    this.getAllBankUseCase
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<BankModel>) => {
        console.log(grid.data);
        this.dataSource = grid.data!;
      });
  }

  deleteRow(e: any): void {
    var rowIndex = e.component.getRowIndexByKey(e.key);

    console.log(e);
    this.deleteBankUseCase.execute(e.key).subscribe();
  }

  editRow(e: any): void {
    console.log('EDIT');
    this.info = {
      id: e.key,
      name: e.data.name,
      branch: this.arrayToObject(e.data.branchCodeView, e.data.branchAdressView),
    };
    console.log(this.info);
    this.putBankUseCase.execute(this.info).subscribe();
  }

  addRow(e: any): void {
    console.log('ADD ROW');
    console.log(e.data);
    this.info = {
      id: e.key,
      name: e.data.name,
      branch: this.arrayToObject(e.data.branchCodeView, e.data.branchAdressView),
    };
    this.postBankUseCase.execute(this.info).subscribe();
    console.log(this.info);
    console.log(e.data);
    console.log('BRANCH: ' + e.data.branch.code);
  }

  arrayToObject(codeString: string, adressString: string): BranchModel[] {
    console.log('arrayToObject:');

    let i = 0;
    let arr: BranchModel[] = [];
    let oto: string[] = [];
    let ota: string[] = [];
    ota.push(adressString);
    oto.push(codeString);
    oto = (<string>(<unknown>codeString)).split(',');
    ota = (<string>(<unknown>adressString)).split(',');
    for (i = 0; i < oto.length; i++) {
      let item: BranchModel = {
        code: oto[i],
        adress: ota[i],
      };
      arr.push(item);
    }
    return arr;
  }
}
