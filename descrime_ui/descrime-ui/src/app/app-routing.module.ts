import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  
  { path:"", component:HomePageComponent },
  { path:"about", component:AboutUsPageComponent },
  { path:"login", component:LoginPageComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
