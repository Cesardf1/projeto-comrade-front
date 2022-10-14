import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  DxPopupModule,
  DxDataGridModule,
  DxFormModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { SystemUserPermissionRoutingModule } from './system-user-permission.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { SystemUserPermissionComponent } from './system-user-permission.component';
import { ModalModule } from './../../components/modal/modal.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    DxPopupModule,
    DxDataGridModule,
    DxFormModule,
    SystemUserPermissionRoutingModule,
    ModalModule,
    CommonModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
  ],
  exports: [],
  declarations: [SystemUserPermissionComponent],
  providers: [],
})
export class SystemUserPermissionModule {
  constructor(@Optional() @SkipSelf() parentModule: SystemUserPermissionModule) {
    throwIfAlreadyLoaded(parentModule, 'SystemUserPermissionModule');
  }
}
