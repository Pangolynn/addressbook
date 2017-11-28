import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactArchiveComponent } from './components/contact/archive/archive.component';

const appRoutes: Routes = [
    {
        path: 'contacts',
        component: ContactArchiveComponent
    }
];

// Lookup: Empty Array provider?? ModuleWithProviders,
export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);




