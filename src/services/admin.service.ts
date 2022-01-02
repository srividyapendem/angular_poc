import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  Adminlogin:boolean=false

  registerAdmin(AdminDetails:any){
    axios.post("https://dct-e-learning.herokuapp.com/api/admin/register", AdminDetails)
        .then((response) => {
            if (response.data.hasOwnProperty("notice")) {
                alert(response.data.notice)
            }
            if (response.data.hasOwnProperty("errors")) {
                alert(response.data.errors)
            }
        })
        .catch((error) => {
            alert("Try with different email or academy name")
        })
  }


  loginAdmin(AdminLdetails:any){
    axios.post("https://dct-e-learning.herokuapp.com/api/admin/login", AdminLdetails)
            .then((response) => {
                if (response.data.hasOwnProperty("token")) {
                    localStorage.setItem("Token", response.data.token);
                    this.Adminlogin=true
                }
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.errors)
                }
            })
            .catch((error) => {
                alert(error.message)
            })
  }



  constructor() { }
}
