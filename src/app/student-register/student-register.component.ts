import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  Sregister:any={name:"",email:"",password:"",isAllowed:true}

  handleSRegister(e:any) {
    e.preventDefault()
    this.studentService.registerStudent(this.Sregister)
  }
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

}
