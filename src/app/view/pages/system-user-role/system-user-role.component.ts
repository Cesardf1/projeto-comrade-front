import { Component, EventEmitter, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { SystemRoleModel } from 'src/app/core/models/system-role.model';
import { GetAllSystemUserUsecase } from 'src/app/core/usecases/system-user/get-all-system-user.usecase';
import { GetAllSystemRoleUsecase } from 'src/app/core/usecases/system-role/get-all-system-role.usecase';
import { of } from 'rxjs';
import { relativeTimeThreshold } from 'moment';
import { SystemRoleLookupByNameUsecase } from 'src/app/core/lookups/ba-usu-lookup/system-role-lookup-by-name-usecase';
import { SystemUserSystemRoleModel } from 'src/app/core/models/system-user-system-role.model';
import { SystemUserSystemRoleManageModel } from 'src/app/core/models/system-user-system-role-manage.model';
import { PutSystemUserSystemRoleManageUsecase } from 'src/app/core/usecases/system-user-system-role-manage/put-system-user-system-role-manage.usecase';
import { GetAllSystemUserSystemRoleManageUsecase } from 'src/app/core/usecases/system-user-system-role-manage/get-all-system-user-system-role-manage.usecase';
import { GetAllSystemUserWithRoleUsecase } from 'src/app/core/usecases/system-user/get-all-system-user-with-role.usecase';
import { ManageRolesUsecase } from 'src/app/core/usecases/system-user/manage-roles.usecase';

@Component({
  selector: 'app-system-user-role',
  templateUrl: 'system-user-role.component.html',
  styleUrls: ['system-user-role.component.scss'],
  providers: [],
})
export class SystemUserRoleComponent implements OnInit {
  dataSource!: SystemUserSystemRoleModel[];
  dataSourceAux: SystemUserSystemRoleModel[] = [];
  roles: SystemRoleModel[] = [];
  selectedSystemUser!: SystemUserSystemRoleModel;
  toolbarOptions = { text: 'apply', onClick: () => this.applyButtonModal() };
  isRoleVisible = false;
  popupVisible = false;

  constructor(
    private getAllSystemUser: GetAllSystemUserUsecase,
    private getAllSystemUserWithRoles: GetAllSystemUserWithRoleUsecase,
    private getAllSystemRole: GetAllSystemRoleUsecase,
    private putSystemUserSystemRoleManageUseCase: ManageRolesUsecase
  ) {}

  handleCellClick(e: any) {
    console.log(e.data);
  }
  ngOnInit(): void {
    this.getRoles();
    this.getSystemUsers();
  }

  setValue(role: SystemRoleModel) {
    return this.selectedSystemUser.systemRoles.some((systemRole) => role.id == systemRole.id);
  }

  showInfo(e: any) {
    this.selectedSystemUser = JSON.parse(JSON.stringify(e.data));
    this.popupVisible = true;
    console.log(this.selectedSystemUser);
    console.log(e.data);
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
    this.getAllSystemUserWithRoles
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserSystemRoleModel>) => {
        this.dataSource = grid.data!;
      });
  }

  // mockUserList(): void {
  //   this.dataSourceAux = this.dataSource.map((u) => {
  //     if (u.id == '1be54cce-1870-c4d8-6a9d-d69ede8d8864') {
  //       return {
  //         ...u,
  //         systemRoles: [
  //           {
  //             id: 'f388513a-9548-1601-cc6d-cd40ec157e81',
  //             name: 'CAMARADA',
  //             tag: 'teste',
  //           },
  //         ],
  //       };
  //     } else {
  //       return {
  //         ...u,
  //         systemRoles: [
  //           {
  //             id: 'c22bcadf-ccd3-44af-c8b2-08da968ca774',
  //             name: 'ADMNISTRADOR',
  //             tag: 'teste',
  //           },
  //         ],
  //       };
  //     }
  //   });
  // }

  handleValueChanged(role: SystemRoleModel, e: any) {
    if (e.value == true) {
      this.selectedSystemUser.systemRoles.push(role);
    } else {
      this.removeRoleById(role);
    }
  }

  removeRoleById(role: SystemRoleModel) {
    this.selectedSystemUser.systemRoles = this.selectedSystemUser.systemRoles.filter(
      (systemRole) => systemRole.id != role.id
    );
  }

  applyButtonModal() {
    this.addInDataSource();
    this.popupVisible = false;
  }

  addInDataSource() {
    const indexOfObject = this.dataSource.findIndex((object) => {
      return object.id === this.selectedSystemUser.id;
    });
    this.dataSource[indexOfObject] = this.selectedSystemUser;
  }
  putSystemUserSystemRoles() {
    let body: SystemUserSystemRoleManageModel = {
      id: this.selectedSystemUser.id,
      systemRoles: this.selectedSystemUser.systemRoles.map((role) => role.id),
    };
    this.putSystemUserSystemRoleManageUseCase.execute(body).subscribe();
  }
}
