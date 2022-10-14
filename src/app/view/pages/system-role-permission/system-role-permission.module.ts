import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  DxPopupModule,
  DxDataGridModule,
  DxFormModule,
  DxDropDownBoxModule,
  DxTreeViewModule,
  DxTreeViewComponent,
  DxTreeListModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { SystemRolePermissionRoutingModule } from './system-role-permission.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { SystemRolePermissionComponent } from './system-role-permission.component';
import { ModalModule } from './../../components/modal/modal.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    DxPopupModule,
    DxDataGridModule,
    DxFormModule,
    SystemRolePermissionRoutingModule,
    ModalModule,
    CommonModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxTreeListModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
  ],
  exports: [],
  declarations: [SystemRolePermissionComponent],
  providers: [],
})
export class SystemRolePermissionModule {
  constructor(@Optional() @SkipSelf() parentModule: SystemRolePermissionModule) {
    throwIfAlreadyLoaded(parentModule, 'SystemRolePermissionModule');
  }
}
