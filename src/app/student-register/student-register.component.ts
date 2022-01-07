import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core"
import { StudentService } from "src/services/student.service"

@Component({
  selector: "app-student-register",
  templateUrl: "./student-register.component.html",
  styleUrls: ["./student-register.component.css"]
})
export class StudentRegisterComponent implements OnInit {
  
  
  ngOnInit(): void {
    
  }

}
