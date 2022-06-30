import { ErrorPageComponent } from './../shared/error-page/error-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
{
  path: "",
  children: [
    {
      path: "login",
      component: LoginComponent
    },
    {
      path: "register",
      component: RegisterComponent
    },
    {
      path: "**",
      redirectTo: "login"
    },
  ]
}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
