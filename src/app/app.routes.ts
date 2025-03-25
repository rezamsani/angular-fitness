import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { AuthGuard, PermissionService } from './auth/auth.guard';

export const routes: Routes = [

    { path: '', component: WellcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'training', component: TrainingComponent, canActivate:[AuthGuard] },    
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule { }
