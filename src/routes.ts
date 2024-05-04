import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home Page',
    loadComponent: () =>
      import('./app/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'personal',
    title: 'Personal Information',
    loadComponent: () =>
      import('./app/personal/personal.component').then(
        (c) => c.PersonalComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    title: 'Login Info',
    loadComponent: () =>
      import('./app/project/project.component').then((c) => c.ProjectComponent),
  },
  {
    path: 'Registration',
    title: 'Registration Details',
    loadComponent: () =>
      import('./app/project/registration_page/registration.component').then((c) => c.Registrationcomponent
      ),
  },
];
