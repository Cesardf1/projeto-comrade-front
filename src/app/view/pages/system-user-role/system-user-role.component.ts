import { Component, EventEmitter, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { SystemRoleModel } from 'src/app/core/models/system-role.model';
import { GetAllSystemUserUsecase } from 'src/app/core/usecases/system-user/get-all-system-user.usecase';
import { GetAllSystemRoleUsecase } from 'src/app/core/usecases/system-role/get-all-system-role.usecase';

@Component({
  selector: 'app-system-user-role',
  templateUrl: 'system-user-role.component.html',
  styleUrls: ['system-user-role.component.scss'],
  providers: [],
})
export class SystemUserRoleComponent implements OnInit {
  dataSource!: SystemUserModel[];
  dataSourceAux: any[] = [];
  roles: SystemRoleModel[] = [];
  selectedRowKeys: any[] = [];
  selectionMode = 'all';
  selectedSystemUser!: SystemUserModel;
  selectedRoleNames = 'No Role Selected';
  recursiveSelectionEnabled = false;
  isRoleVisible = false;
  popupVisible = false;
  teste = false;
  selectedSystemUserRoles!: SystemRoleModel[];
  applyButtonOption = {
    text: 'apply',
    onClick() {},
  };

  constructor(
    private getAllSystemUser: GetAllSystemUserUsecase,
    private getAllSystemRole: GetAllSystemRoleUsecase
  ) {}

  handleCellClick(e: any) {
    console.log(e.data);
  }
  ngOnInit(): void {
    this.getRoles();
    this.getSystemUsers();
  }

  showInfo(e: any) {
    this.selectedSystemUser = e.data;
    this.selectedSystemUserRoles = e.data.systemRoles;
    this.popupVisible = true;
    console.log(this.selectedSystemUser);
    console.log(this.selectedSystemUserRoles);
  }

  getRoles() {
    this.getAllSystemRole
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemRoleModel>) => {
        console.log(grid.data);
        this.roles = grid.data!;
      });
  }

  getSystemUsers() {
    this.getAllSystemUser
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data!;
        this.mockUserList();
      });
  }

  mockUserList(): void {
    this.dataSourceAux = this.dataSource.map((u) => {
      if (u.id == '1be54cce-1870-c4d8-6a9d-d69ede8d8864') {
        return {
          ...u,
          systemRoles: [
            {
              id: 'f388513a-9548-1601-cc6d-cd40ec157e81',
              name: 'CAMARADA',
            },
          ],
        };
      } else {
        return {
          ...u,
          systemRoles: [
            {
              id: 'c22bcadf-ccd3-44af-c8b2-08da968ca774',
              name: 'ADMNISTRADOR',
            },
          ],
        };
      }
    });
  }

  handleValueChanged(role: SystemRoleModel) {
    console.log(role);
    this.teste = false;
    var i = 0;
    var j = 0;

    for (j = 0; j < this.selectedSystemUser.systemRoles.length; j++) {
      if (this.selectedSystemUser.systemRoles[j].id == role.id) {
        this.teste = true;
      }
    }

    console.log('SHOW INFO: ' + this.teste);
  }

  showValue(e: any) {
    console.log(e.value);
  }

  isInsideTheArray(element: SystemUserModel) {}
}
