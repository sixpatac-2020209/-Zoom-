import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ZoomComponent } from './meeting/zoom/zoom.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'zoom', component: ZoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
