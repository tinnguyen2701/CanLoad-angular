import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canLoad: [AuthGuardService], canActivate: [AuthGuardService]},
  {path: 'test', loadChildren: './test/test.module#TestModule', canLoad: [AuthGuardService], canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
