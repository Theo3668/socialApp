import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'log-in', loadChildren: './page/log-in/log-in.module#LogInPageModule' },
  { path: 'sign-in', loadChildren: './page/sign-in/sign-in.module#SignInPageModule' },
  { path: 'add-item', loadChildren: './page/add-item/add-item.module#AddItemPageModule' },
  { path: 'edit', loadChildren: './page/edit/edit.module#EditPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
