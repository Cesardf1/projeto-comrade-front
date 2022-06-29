import { Component, OnInit } from '@angular/core';
import { GetAllBankUsecase } from 'src/app/core/usecases/bank/get-all-bank.usecase';
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
  constructor(private getAllBankUseCase: GetAllBankUsecase) {}

  ngOnInit(): void {}

  getButton() {
    this.getAllBankUseCase
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<BankModel>) => {
        console.log(grid.data);
        this.dataSource = grid.data!;
      });
  }
}
