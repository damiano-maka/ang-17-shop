import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./pages/home/home.component')},
    {path: 'cart', loadComponent: () => import('./pages/cart/cart.component')},
    {path: 'settings', loadComponent: () => import('./pages/settings/settings.component')},
    {path: '', redirectTo: 'home' , pathMatch: 'full' },
];
