import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './features/main-layout.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m=> m.UsersModule)
      },
      {
        path: 'user-info/:id',
        loadChildren: () => import('./user-info/user-info.module').then(m=> m.UserInfoModule)
      },
      {
        path: 'create-user',
        loadChildren: () => import('./create-user/create-user.module').then(m=> m.CreateUserModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
