import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-customer',
    loadChildren: () => import('./pages/add-customer/add-customer.module').then( m => m.AddCustomerPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./pages/customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'add-organization',
    loadChildren: () => import('./pages/add-organization/add-organization.module').then( m => m.AddOrganizationPageModule)
  },
  { path: '', loadChildren: './pages/idea-list/idea-list.module#IdeaListPageModule' },
  { path: 'idea', loadChildren: './pages/idea-details/idea-details.module#IdeaDetailsPageModule' },
  { path: 'idea/:id', loadChildren: './pages/idea-details/idea-details.module#IdeaDetailsPageModule' },
  {
    path: 'idea-details',
    loadChildren: () => import('./pages/idea-details/idea-details.module').then( m => m.IdeaDetailsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
