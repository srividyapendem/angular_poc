import { Component, OnInit } from "@angular/core"
import { AdminService } from "src/services/admin.service"

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {

  Adminlog:boolean=false

  rerender(){
    this.Adminlog=this.admin.Adminlogin
  }

  constructor(private admin:AdminService) {
   }

  ngOnInit(): void {
    
  }

}
