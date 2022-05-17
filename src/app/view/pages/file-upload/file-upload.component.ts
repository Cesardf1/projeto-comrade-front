import { Component, OnInit } from '@angular/core';
import { GetAllSystemUserUsecase } from '../../../core/usecases/system-user/get-all-system-user.usecase';
import { SystemUserModel } from '../../../core/models/system-user.model';
import { PageResultModel } from '../../../core/utils/responses/page-result.model';
import { PostSystemUserUsecase } from 'src/app/core/usecases/system-user/post-system-user.usecase';
import { FileUploadModel } from 'src/app/core/models/file-upload.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: 'file-upload.component.html',
  styleUrls: ['file-upload.component.scss'],
  providers: [],
})
export class FileUploadComponent implements OnInit {
  dataSource!: SystemUserModel[];
  data?: FileUploadModel;
  constructor(
    private getAllSystemUser: GetAllSystemUserUsecase,
    private postSystemUserUseCase: PostSystemUserUsecase
  ) {}

  ngOnInit(): void {
    this.data = {
      name: '3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO       ',
    };

    this.postSystemUserUseCase.execute(this.data).subscribe();

    this.getAllSystemUser
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data!;
      });
  }
}
