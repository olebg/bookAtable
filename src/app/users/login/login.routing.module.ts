import { LoginSignupGuardService } from './login-sugnup-guard.service';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const loginRoutes: Routes = [
    {
        path: 'login',
        canActivate: [LoginSignupGuardService],
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule],
    providers: [LoginSignupGuardService]
})
export class LoginRoutingModule { }
