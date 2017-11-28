import { InterceptorService } from 'ng2-interceptors';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

// app
import { Routing, AppRoutingProviders } from './app.routes';

// services : api
import { UserAPI } from './services/api/user/user.classes';
import { ContactAPI } from './services/api/contact/contact.classes';

// models
import { UserModel } from './models/user/user.classes';

// components
import { AppComponent } from './app.component';
import { ContactArchiveComponent } from './components/contact/archive/archive.component';
import { ContactSingleComponent } from './components/contact/single/single.component';
import { NavTopComponent } from './components/_shared/components/nav-top/nav-top.component';
import { MenuSettingsComponent } from './components/_shared/components/menu-settings/menu-settings.component'

// services : core
import { StorageService } from './services/core/storage/storage.classes';

// services : interceptors

import { InterceptorFactory } from './services/interceptors/shared.functions';
import { AuthenticationInterceptorFactory } from './services/interceptors/authentication/authentication.functions';
import { AuthenticationInterceptor } from './services/interceptors/authentication/authentication.classes';


@NgModule({
  declarations: [
    AppComponent,
    ContactSingleComponent,
    ContactArchiveComponent,
    NavTopComponent,
    MenuSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
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
    StorageService, UserAPI, UserModel, ContactAPI
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
