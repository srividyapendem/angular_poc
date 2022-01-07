import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  Adminlog:any={email:'',password:''}

  handleAlogin(e:any){
    e.preventDefault()
    this.Admin.loginAdmin(this.Adminlog)

  }

  constructor(private Admin:AdminService) { }

  ngOnInit(): void {
  }

}