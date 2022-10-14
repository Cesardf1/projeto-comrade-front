import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemRolePermissionComponent } from './system-role-permission.component';

const routes: Routes = [
  {
    path: '',
    component: SystemRolePermissionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRolePermissionRoutingModule {}
