import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-edit-student-details',
  templateUrl: './edit-student-details.component.html',
  styleUrls: ['./edit-student-details.component.css']
})
export class EditStudentDetailsComponent implements OnInit {

  editStudent= new FormGroup({
      
    name: new FormControl(''),
    email: new FormControl(''),
    isAllowed:new FormControl('')
    })
 

 
  constructor(private studentService:StudentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.studentService.getEditStudent(this.route.snapshot.params['_id']).subscribe((result)=>{
      this.editStudent= new FormGroup({
      
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        isAllowed:new FormControl(result['isAllowed'])
        })
    })

   
  }

  updateStudent(){
    this.studentService.updateStudent(this.route.snapshot.params['id'],this.editStudent.value).subscribe((result)=>{
      console.log(result,"data")
    })
  }

}
