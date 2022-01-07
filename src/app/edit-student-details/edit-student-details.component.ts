import { Component, OnInit } from "@angular/core"
import {  FormControl, FormGroup,
   Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { StudentService } from "src/services/student.service"

@Component({
  selector: "app-edit-student-details",
  templateUrl: "./edit-student-details.component.html",
  styleUrls: ["./edit-student-details.component.css"]
})
export class EditStudentDetailsComponent implements OnInit {
  alert:boolean=false;
  get name() {
    return this.editStudent.get('name') as FormControl;
  }
  get email() {
    return this.editStudent.get('email') as FormControl;
  }

  editStudent= new FormGroup({
      
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    isAllowed:new FormControl("")
    })
 

 
  constructor(private studentService:StudentService,private route:ActivatedRoute 
    ,private router:Router  ) { }
    

  ngOnInit(): void {
    
    this.studentService.getEditStudent(this.route.snapshot.params["_id"]).subscribe((result)=>{
      this.editStudent= new FormGroup({
      
        name: new FormControl(result["name"]),
        email: new FormControl(result["email"]),
        isAllowed:new FormControl(result["isAllowed"])
        })
    })

   
  }

  updateStudent(){
    this.studentService.updateStudent(this.route.snapshot.params["_id"],this.editStudent.value).subscribe((result)=>{
      console.log(result,
        "data updated successfully");
        this.ngOnInit()
        this.alert =true;
      })
   
 
  }
  
  onCancel(){
    this.router.navigate(['./Student/allstudents'])
    }

    closeAlert(){
      this.alert =false;

      this.router.navigate(['./Student/allstudents'])
    }

}



