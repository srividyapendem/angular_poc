import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { EditStudentDetailsComponent } from './edit-student-details/edit-student-details.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentRegisterComponent } from './student-register/student-register.component';


const routes: Routes = [
  {path:"Student",component:StudentLoginComponent},
  {path:"Adminpage",component:AdminPageComponent},
  {path:"Admin/Login",component:AdminLoginComponent},
  {path:"Admin/Register",component:AdminRegisterComponent},
  {path:"Studentpage",component:StudentPageComponent},
  {path:"Student/Register",component:StudentRegisterComponent},
  {path:"Student/allstudents",component:AllstudentsComponent},
  {path:"Student/management/:_id",component:EditStudentDetailsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
