import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/account/login/login.page';


const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginPageModule),
    // canLoad: [IntroGuard, AutoLoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/account/register/register.module').then(m => m.RegisterPageModule),
    // canLoad: [IntroGuard, AutoLoginGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule),
    // canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
