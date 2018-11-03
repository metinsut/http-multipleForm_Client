import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpWorkComponent } from './http-work/http-work.component';

const routes: Routes = [{ path: '', component: HttpWorkComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
