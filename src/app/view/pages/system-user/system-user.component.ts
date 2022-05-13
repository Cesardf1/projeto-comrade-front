import { Component, OnInit } from '@angular/core';
import { GetAllSystemUserUsecase } from '../../../core/usecases/system-user/get-all-system-user.usecase';
import { SystemUserModel } from '../../../core/models/system-user.model';
import { PageResultModel } from '../../../core/utils/responses/page-result.model';
import { PostSystemUserUsecase } from 'src/app/core/usecases/system-user/post-system-user.usecase';

@Component({
  selector: 'app-system-user',
  templateUrl: 'system-user.component.html',
  styleUrls: ['system-user.component.scss'],
  providers: [],
})
export class SystemUserComponent implements OnInit {
  dataSource!: SystemUserModel[];
  data?: SystemUserModel;
  constructor(
    private getAllSystemUser: GetAllSystemUserUsecase,
    private postSystemUserUseCase: PostSystemUserUsecase
  ) {}

  ngOnInit(): void {
    this.data = {
      email: '',
      name: '',
      registerDate: new Date(),
      registration: '',
      id: undefined,
    };

    this.postSystemUserUseCase.execute(this.data).subscribe();

    this.getAllSystemUser
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data!;
      });
  }
}
