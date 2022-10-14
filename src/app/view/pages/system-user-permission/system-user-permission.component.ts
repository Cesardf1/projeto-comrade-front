import { Component, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemPermissionModel } from 'src/app/core/models/system-permission.model';
import { GetAllSystemUserUsecase } from 'src/app/core/usecases/system-user/get-all-system-user.usecase';
import { GetAllSystemPermissionUsecase } from 'src/app/core/usecases/system-permission/get-all-system-permission.usecase';
import { SystemUserSystemPermissionModel } from 'src/app/core/models/system-user-system-permission.model';
import { SystemUserSystemPermissionManageModel } from 'src/app/core/models/system-user-system-permission-manage.model';
import { GetAllSystemUserWithPermissionUsecase } from 'src/app/core/usecases/system-user/get-all-system-user-with-permission.usecase';
import { ManagePermissionsUsecase } from 'src/app/core/usecases/system-user/manage-permissions.usecase';

@Component({
  selector: 'app-system-user-permission',
  templateUrl: 'system-user-permission.component.html',
  styleUrls: ['system-user-permission.component.scss'],
  providers: [],
})
export class SystemUserPermissionComponent implements OnInit {
  dataSource!: SystemUserSystemPermissionModel[];
  permissions: SystemPermissionModel[] = [];
  selectedSystemUser!: SystemUserSystemPermissionModel;
  toolbarOptions = { text: 'apply', onClick: () => this.applyButtonModal() };
  isPermissionVisible = false;
  popupVisible = false;

  constructor(
    private getAllSystemUserWithPermissions: GetAllSystemUserWithPermissionUsecase,
    private getAllSystemPermission: GetAllSystemPermissionUsecase,
    private putSystemUserSystemPermissionManageUseCase: ManagePermissionsUsecase
  ) {}

  ngOnInit(): void {
    this.getPermissions();
    this.getSystemUsers();
  }

  setValue(permission: SystemPermissionModel) {
    return this.selectedSystemUser.systemPermissions.some(
      (systemPermission) => permission.id == systemPermission.id
    );
  }

  showPopUpModal(e: any) {
    this.selectedSystemUser = JSON.parse(JSON.stringify(e.data));
    this.popupVisible = true;
  }

  getPermissions() {
    this.getAllSystemPermission
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemPermissionModel>) => {
        this.permissions = grid.data!;
      });
  }

  getSystemUsers() {
    this.getAllSystemUserWithPermissions
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserSystemPermissionModel>) => {
        this.dataSource = grid.data!;
      });
  }

  handleValueChanged(permission: SystemPermissionModel, e: any) {
    if (e.value == true) {
      this.selectedSystemUser.systemPermissions.push(permission);
    } else {
      this.removePermissionById(permission);
    }
  }

  removePermissionById(permission: SystemPermissionModel) {
    this.selectedSystemUser.systemPermissions = this.selectedSystemUser.systemPermissions.filter(
      (systemPermission) => systemPermission.id != permission.id
    );
  }

  applyButtonModal() {
    this.addInDataSource();
    this.putSystemUserSystemPermissions();
    this.popupVisible = false;
  }

  addInDataSource() {
    const indexOfObject = this.dataSource.findIndex((object) => {
      return object.id === this.selectedSystemUser.id;
    });
    this.dataSource[indexOfObject] = this.selectedSystemUser;
  }
  putSystemUserSystemPermissions() {
    let body: SystemUserSystemPermissionManageModel = {
      id: this.selectedSystemUser.id,
      Permissions: this.selectedSystemUser.systemPermissions.map((permission) => permission.id),
    };
    this.putSystemUserSystemPermissionManageUseCase.execute(body).subscribe();
  }
}
