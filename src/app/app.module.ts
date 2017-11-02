import { InterceptorService } from 'ng2-interceptors';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// app
import { Routing, AppRoutingProviders } from './app.routes';

// pipes
import { ToHTMLPipe } from './services/pipes/to-html/to-html.classes';
import { MomentPipe } from './services/pipes/moment/moment.classes';

// directives
import { ActiveDirective } from './directives/active.directive';
import { AutoHeightDirective } from './directives/auto-height.directive';
import { FocusDirective } from './directives/focus.directive';
import { ValidatorFieldDirective } from './directives/validator-field.directive';
import { ValidatorFormDirective } from './directives/validator-form.directive';

// validators

// models
import { UserModel } from './models/user/user.classes';

// services : core
import { StorageService } from './services/core/storage/storage.classes';
import { LanguageService } from './services/core/language/language.classes';
import { MessagerService } from './services/core/messenger/messenger.classes';
import { ValidatorService } from './services/core/validator/validator.classes';
import { FormGroup } from './services/core/validator/form.classes';

// services : interceptors
import { InterceptorFactory } from './services/interceptors/shared.functions';
import { AuthenticationInterceptorFactory } from './services/interceptors/authentication/authentication.functions';
import { AuthenticationInterceptor } from './services/interceptors/authentication/authentication.classes';

// services : api
import { AccountAPI } from './services/api/account/account.classes';
import { UserAPI } from './services/api/user/user.classes';

// services : guard
import { AuthenticationGuard } from './services/guards/authentication/authentication.classes';
import { AuthenticationNotGuard } from './services/guards/authentication-not/authentication-not.classes';

// components
import { AppComponent } from './app.component';

import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// components : shared
import { NavTopSignedInComponent } from './components/_shared/components/nav-top-signed-in/nav-top-signed-in.component';
import { NavTopHomeComponent} from './components/_shared/components/nav-top-home/nav-top-home.component';
import { MenuSettingsComponent } from './components/_shared/components/menu-settings/menu-settings.component';
import { MessageGlobalComponent } from './components/_shared/components/message/global/global.component';
import { MessageFormComponent } from './components/_shared/components/message/form/form.component';

// components : user
import { UserConfirmComponent } from './components/user/confirm/confirm.component';

import { UserSettingsAccountComponent } from './components/user/settings/account/account.component';
import { UserSettingsConnectComponent } from './components/user/settings/connect/connect.component';
import { UserSettingsPreferencesComponent } from './components/user/settings/preferences/preferences.component';

// components : user : account

import { UserSettingsAccountNameComponent } from './components/user/settings/account/name/name.component';
import { UserSettingsAccountPasswordComponent } from './components/user/settings/account/password/password.component';
import { UserSettingsAccountEmailComponent } from './components/user/settings/account/email/email.component';
import { SidebarUserSettingsComponent } from './components/user/settings/_shared/components/sidebar-settings/sidebar-settings.component';

@NgModule({
	declarations: [
		AppComponent,
		CreateAccountComponent, SignInComponent, ForgotPasswordComponent, ChangePasswordComponent,
		DashboardComponent,
		UserConfirmComponent, UserSettingsAccountComponent, UserSettingsConnectComponent, UserSettingsPreferencesComponent,
		UserSettingsAccountNameComponent, UserSettingsAccountPasswordComponent, UserSettingsAccountEmailComponent, SidebarUserSettingsComponent,
		NavTopSignedInComponent, NavTopHomeComponent, MenuSettingsComponent,
		MessageGlobalComponent, MessageFormComponent,
		ToHTMLPipe, MomentPipe,
		ActiveDirective, AutoHeightDirective, FocusDirective, ValidatorFieldDirective, ValidatorFormDirective
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		Routing,
		FormsModule, ReactiveFormsModule
	],
	providers: [
		AppRoutingProviders,
		{
			provide: InterceptorService,
			useFactory: InterceptorFactory,
			deps: [XHRBackend, RequestOptions]
		},
		AuthenticationInterceptor,
		{
			provide: InterceptorService,
			useFactory: AuthenticationInterceptorFactory,
			deps: [XHRBackend, RequestOptions, AuthenticationInterceptor]
		},
		StorageService, LanguageService, MessagerService, ValidatorService, FormGroup,
		AuthenticationGuard, AuthenticationNotGuard,
		AccountAPI, UserAPI,
		UserModel
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
