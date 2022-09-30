import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=''
  ac_no=''
  pswd=''
  acno: any;

  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  Register(){
   var uname=this.uname
   var acno=this.acno
   var pswd=this.pswd
   const result=this.ds.Register(acno,uname,pswd)
    if(result){
      alert("registered")
      this.router.navigateByUrl('')
    }
    else{
      alert("user already exist")
    }
   let userDetails=this.ds.userDetails
  }

}
