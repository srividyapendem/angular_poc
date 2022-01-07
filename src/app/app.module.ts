import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HomepageComponent } from "./homepage/homepage.component"
import { StudentLoginComponent } from "./student-login/student-login.component"

import { AdminRegisterComponent } from "./admin-register/admin-register.component"

import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { StudentRegisterComponent } from "./student-register/student-register.component"
import { StudentPageComponent } from "./student-page/student-page.component"
import { AllstudentsComponent } from "./allstudents/allstudents.component"
import { HttpClientModule } from "@angular/common/http"
import { EditStudentDetailsComponent } from "./edit-student-details/edit-student-details.component";
import { AdminLoginComponent } from './admin-login/admin-login.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentLoginComponent,
  
    AdminRegisterComponent,
   
    StudentRegisterComponent,
    StudentPageComponent,
    AllstudentsComponent,
    EditStudentDetailsComponent,
    AdminLoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
ConfirmationPopoverModule.
    forRoot(
      {
        confirmButtonType:'danger'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
