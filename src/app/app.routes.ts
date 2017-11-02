import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// services : guards
import { AuthenticationNotGuard } from './services/guards/authentication-not/authentication-not.classes';
import { AuthenticationGuard } from './services/guards/authentication/authentication.classes';

// components
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { UserConfirmComponent } from './components/user/confirm/confirm.component';
import { UserSettingsAccountComponent } from './components/user/settings/account/account.component';
import { UserSettingsConnectComponent } from './components/user/settings/connect/connect.component';
import { UserSettingsPreferencesComponent } from './components/user/settings/preferences/preferences.component';

const appRoutes: Routes = [
    {
        path: 'create-account',
        component: CreateAccountComponent,
        canActivate: [AuthenticationNotGuard]
    },
    {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [AuthenticationNotGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [AuthenticationNotGuard]
    },
    {
        path: 'change-password/:token',
        component: ChangePasswordComponent,
        canActivate: [AuthenticationNotGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'user',
        children: [
            {
                path: 'confirm/:type/:token',
                component: UserConfirmComponent,
                canActivate: [AuthenticationGuard]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: 'account',
                        component: UserSettingsAccountComponent,
                        canActivate: [AuthenticationGuard]
                    },
                    {
                        path: 'connect',
                        component: UserSettingsConnectComponent,
                        canActivate: [AuthenticationGuard]
                    },
                    {
                        path: 'preferences',
                        component: UserSettingsPreferencesComponent,
                        canActivate: [AuthenticationGuard]
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'sign-in'
    }
];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
