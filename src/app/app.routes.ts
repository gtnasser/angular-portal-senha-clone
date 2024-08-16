import { Routes } from '@angular/router';
import { PortalSenhaComponent } from './pages/portal-senha/portal-senha.component';

export const routes: Routes = [
    { path: '', redirectTo: '/PortalSenha', pathMatch: 'full' },
    { path: "PortalSenha",    component: PortalSenhaComponent }
];
