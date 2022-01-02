import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {
  studentDetails:any
  
  constructor(private ss:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.ss.getAllStudents().subscribe((res:any)=>{
      this.studentDetails=res
      console.log(this.studentDetails);
     
    }
    );
 
   
  }

 

}
