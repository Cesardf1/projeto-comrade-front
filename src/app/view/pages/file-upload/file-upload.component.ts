import { Component, OnInit } from '@angular/core';
import { GetAllSystemUserUsecase } from '../../../core/usecases/system-user/get-all-system-user.usecase';
import { SystemUserModel } from '../../../core/models/system-user.model';
import { PageResultModel } from '../../../core/utils/responses/page-result.model';
import { PostSystemUserUsecase } from 'src/app/core/usecases/system-user/post-system-user.usecase';
import { FileUploadModel } from 'src/app/core/models/file-upload.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: 'file-upload.component.html',
  styleUrls: ['file-upload.component.scss'],
  providers: [],
})
export class FileUploadComponent implements OnInit {
  fileName = '';
  dataSource!: SystemUserModel[];
  data?: FileUploadModel;
  testLines: string[] = [];
  constructor(
    private getAllSystemUser: GetAllSystemUserUsecase,
    private postSystemUserUseCase: PostSystemUserUsecase,
    private http: HttpClient
  ) {}

  lines?: any;

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
    this.postSystemUserUseCase.execute(this.data).subscribe();

    this.getAllSystemUser
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data!;
      });
  }
}
