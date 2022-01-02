import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css'],
})
export class AdminRegisterComponent implements OnInit {

  Aregister:any={username:"",email:"",password:"",academy:{name:"",website:""}}

  handleARegister(e:any) {
    e.preventDefault()
    this.adminserve.registerAdmin(this.Aregister)
  }

  constructor(private adminserve:AdminService) { }

  ngOnInit(): void {
  }

}
