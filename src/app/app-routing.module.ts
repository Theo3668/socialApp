import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogInPage } from './page/log-in/log-in.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

  { path: 'log-in', component: LogInPage, children:[{ path: 'feeds', loadChildren: './page/feeds/feeds.module#FeedsPageModule' },
                                                    { path: 'profile', loadChildren: './page/profile/profile.module#ProfilePageModule' },]},
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
