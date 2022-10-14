import { Component, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemPermissionModel } from 'src/app/core/models/system-permission.model';
import { GetAllSystemPermissionUsecase } from 'src/app/core/usecases/system-permission/get-all-system-permission.usecase';
import { SystemRoleSystemPermissionModel } from 'src/app/core/models/system-role-system-permission.model';
import { SystemRoleSystemPermissionManageModel } from 'src/app/core/models/system-role-system-permission-manage.model';
import { GetAllSystemRoleWithPermissionUsecase } from 'src/app/core/usecases/system-role/get-all-system-role-with-permission.usecase';
import { ManagePermissionsUsecase } from 'src/app/core/usecases/system-role/manage-permissions.usecase';

@Component({
  selector: 'app-system-role-permission',
  templateUrl: 'system-role-permission.component.html',
  styleUrls: ['system-role-permission.component.scss'],
  providers: [],
})
export class SystemRolePermissionComponent implements OnInit {
  dataSource!: SystemRoleSystemPermissionModel[];
  permissions: SystemPermissionModel[] = [];
  selectedSystemRole!: SystemRoleSystemPermissionModel;
  toolbarOptions = { text: 'apply', onClick: () => this.applyButtonModal() };
  isPermissionVisible = false;
  popupVisible = false;

  constructor(
    private getAllSystemRoleWithPermissions: GetAllSystemRoleWithPermissionUsecase,
    private getAllSystemPermission: GetAllSystemPermissionUsecase,
    private putSystemRoleSystemPermissionManageUseCase: ManagePermissionsUsecase
  ) {}

  ngOnInit(): void {
    this.getPermissions();
    this.getSystemRoles();
  }

  setValue(permission: SystemPermissionModel) {
    return this.selectedSystemRole.systemPermissions.some(
      (systemPermission) => permission.id == systemPermission.id
    );
  }

  showPopUpModal(e: any) {
    this.selectedSystemRole = JSON.parse(JSON.stringify(e.data));
    this.popupVisible = true;
  }

  getPermissions() {
    this.getAllSystemPermission
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemPermissionModel>) => {
        this.permissions = grid.data!;
      });
  }

  getSystemRoles() {
    this.getAllSystemRoleWithPermissions
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemRoleSystemPermissionModel>) => {
        this.dataSource = grid.data!;
      });
  }

  handleValueChanged(permission: SystemPermissionModel, e: any) {
    if (e.value == true) {
      this.selectedSystemRole.systemPermissions.push(permission);
    } else {
      this.removePermissionById(permission);
    }
  }

  removePermissionById(permission: SystemPermissionModel) {
    this.selectedSystemRole.systemPermissions = this.selectedSystemRole.systemPermissions.filter(
      (systemPermission) => systemPermission.id != permission.id
    );
  }

  applyButtonModal() {
    this.addInDataSource();
    this.popupVisible = false;
  }

  addInDataSource() {
    const indexOfObject = this.dataSource.findIndex((object) => {
      return object.id === this.selectedSystemRole.id;
    });
    this.dataSource[indexOfObject] = this.selectedSystemRole;
  }
  putSystemRoleSystemPermissions() {
    let body: SystemRoleSystemPermissionManageModel = {
      id: this.selectedSystemRole.id,
      systemPermissions: this.selectedSystemRole.systemPermissions.map(
        (permission) => permission.id
      ),
    };
    this.putSystemRoleSystemPermissionManageUseCase.execute(body).subscribe();
  }
}
