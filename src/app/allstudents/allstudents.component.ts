import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { StudentService } from "src/services/student.service"

@Component({
  selector: "app-allstudents",
  templateUrl: "./allstudents.component.html",
  styleUrls: ["./allstudents.component.css"]
})
export class AllstudentsComponent implements OnInit {
 public  studentDetails:any

  popoverTitle = 'Delete Confirmation';
  popoverMessage = 'Do you Really want to delete ?';
  yesClicked = false;
  cancelClicked = false;
  
  constructor(

    private fb : FormBuilder , private ss:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.ss.getAllStudents().subscribe((res:any)=>{
      this.studentDetails=res
      console.log(this.studentDetails);
     
    }
    )
 
   
  }
  Sregister:any={name:"",email:"",password:"",isAllowed:true}

  handleSRegister(e:any) {
    e.preventDefault()
    this.ss.registerStudent(this.Sregister)
  
   this.ngOnInit();
   
  }
 

 
  onDelete(student:any){
   
      this.studentDetails.splice(student._id,-1)
    this.ss.deleteStudent(student).subscribe((res)=>{
      console.log("data deleted successfully!",res);
      
      this.ngOnInit();
     
     
    
    
    })
  

  }



  _id(_id: any) {
    throw new Error("Method not implemented.")
  }

 

}
