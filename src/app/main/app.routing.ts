import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from '../services';
import { AuthGuard } from '../services/guards/auth-guard.service';
import {
  LoginFormComponent,
  ResetPasswordFormComponent,
  CreateAccountFormComponent,
  ChangePasswordFormComponent,
} from '../view/components';

const routes: Routes = [
  {
    path: 'task',
    loadChildren: () => import('../view/pages/task/task.module').then((m) => m.TaskModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('../view/pages/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('../view/pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'financial-transaction',
    loadChildren: () =>
      import('../view/pages/financial-transaction/financial-transaction.module').then(
        (m) => m.FinancialTransactionModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'bank',
    loadChildren: () => import('../view/pages/bank/bank.module').then((m) => m.BankModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'system-user',
    loadChildren: () =>
      import('../view/pages/system-user/system-user.module').then((m) => m.SystemUserModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
