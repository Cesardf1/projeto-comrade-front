import { ErrorHandler, NgModule } from '@angular/core';
import {
  PathLocationStrategy,
  LocationStrategy,
  APP_BASE_HREF,
  PlatformLocation,
} from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationWebRepository } from '../data/repository/authentication-web-reporitory/authentication-web.repository';
import { AuthenticationRepository } from '../core/repositories/authentication.repository';
import { TokenWebRepository } from '../data/repository/token-web-reporitory/token-web.repository';
import { TokenRepository } from '../core/repositories/token.repository';
import { SystemUserLookupRepository } from '../core/lookups/ba-usu-lookup/system-user-lookup.repository';
import { SystemUserLookupWebRepository } from '../data/lookup-repository/usuario-sistema-lookup-web.repository';
import { FinancialTransactionLookupRepository } from '../core/lookups/ba-usu-lookup/financial-transaction-lookup.repository';
import { FinancialTransactionLookupWebRepository } from '../data/lookup-repository/transacao-financeira-lookup-web.repository';
import { AirplaneRepository } from '../core/repositories/airplane.repository';
import { AirplaneWebRepository } from '../data/repository/airplane-web-repository/airplane-web.repository';
import { ComradeTokenRepository } from '../core/repositories/comrade-token.repository';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService, ScreenService, AppInfoService } from '../services';
import {
  FooterModule,
  ResetPasswordFormModule,
  CreateAccountFormModule,
  ChangePasswordFormModule,
  LoginFormModule,
} from '../view/components';
import {
  SideNavOuterToolbarModule,
  SideNavInnerToolbarModule,
  SingleCardModule,
} from '../view/layouts';
import { GlobalErrorHandlerService } from '../services/handlers/global-error-handler.service';
import { AuthInterceptor } from '../services/interceptors/auth.interceptor';
import { SystemUserRepository } from '../core/repositories/system-user.repository';
import { SystemUserWebRepository } from '../data/repository/system-user-web-repository/system-user-web.repository';
import { FinancialTransactionRepository } from '../core/repositories/financial-transaction.repository';
import { FinancialTransactionWebRepository } from '../data/repository/financial-transaction-web-repository/financial-transaction-web-repository';
import { BankWebRepository } from '../data/repository/bank-web-repository/bank-web-repository';
import { BankRepository } from '../core/repositories/bank.repository';
export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [PlatformLocation],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: AirplaneRepository, useClass: AirplaneWebRepository },
    { provide: SystemUserRepository, useClass: SystemUserWebRepository },
    { provide: FinancialTransactionRepository, useClass: FinancialTransactionWebRepository },
    { provide: BankRepository, useClass: BankWebRepository },
    { provide: AuthenticationRepository, useClass: AuthenticationWebRepository },
    { provide: TokenRepository, useClass: TokenWebRepository },
    {
      provide: FinancialTransactionLookupRepository,
      useClass: FinancialTransactionLookupWebRepository,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
