import { Injectable } from "@angular/core"
import {HttpClient}from "@angular/common/http"
import axios from "axios"
import { map } from "rxjs"
import Swal from "sweetalert2"

@Injectable({
  providedIn: "root"
})
export class StudentService {
  axios: any

  constructor(private _http:HttpClient) {  }

  token:any=localStorage.getItem("Token")


  registerStudent(StudentDetails:any){

    axios.post("https://dct-e-learning.herokuapp.com/api/admin/students", StudentDetails, {headers:{
      Authorization:this.token
    }
        })
            .then((response) => {
                if (response.data.hasOwnProperty("errors")) {
                    (response.data.errors)
                }
                else {
                   Swal.fire("registered successfully")
                         window.location.reload()
                }

            })
            .catch((error) => {
                console.log(error.message)
            })
    }



getAllStudents(){
  return this._http.get("https://dct-e-learning.herokuapp.com/api/admin/students", {
    headers: {
      Authorization:this.token
    }
})
}
getEditStudent(S_id:any){
 
    return this._http.get(`https://dct-e-learning.herokuapp.com/api/students/${S_id}`, {
      headers: {
          Authorization: this.token
      }
  }).pipe
    (map((res:any)=>{
      return res
    }))
  
}
deleteStudent(S_id:any){
 
  return this._http.delete(`https://dct-e-learning.herokuapp.com/api/admin/students/${S_id}`, {
    headers: {
        Authorization: this.token
    }
}).pipe
  (map((res:any)=>{
    return res
  }))

}



updateStudent(S_U_id:any,updatedS:any){
  return  this._http.put(`https://dct-e-learning.herokuapp.com/api/students/${S_U_id}`,updatedS , {
    headers: {
        Authorization: this.token
    }

  
  })  

}

/*axios.get(`https://dct-e-learning.herokuapp.com/api/students/${S_id}`, {
            headers: {
                Authorization: localStorage.getItem("Token")
            }
        })*/

 /* axios.get("https://dct-e-learning.herokuapp.com/api/admin/students", {
      headers: {
        Authorization:this.token
      }
  }).then((response) => {
      console.log(response.data)
  }).catch((error) => {
      alert(error.message)
  })

}

}*/



}

function then(arg0: (response: any) => void) {
  throw new Error("Function not implemented.")
}
