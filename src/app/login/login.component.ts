import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking partner"
  acnt="your ac_number"
  acno=''
  pas=''

  // userDetails:any={
  //   1000:{acno:1000,username:"amal",password:123,balance:100000},
  //   1001:{acno:1001,username:"anu",password:123,balance:200000},
  //   1002:{acno:1002,username:"joyal",password:123,balance:150000},
  //   1003:{acno:1003,username:"anaga",password:123,balance:100000}


  // }

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  // login(){
  //   var acnum=this.acno
  //   var psw=this.pas
  //   let userDetails=this.userDetails
  //   if(acnum in userDetails){
  //     if(psw==userDetails[acnum]['password']){
  //       alert("login success")
  //     }
  //     else{
  //       alert('invalid password')
  //     }
  //   }
  //   else{
  //     alert("user not exist or incurrect ac number")
  //   }
  // }

  // login(a:any,p:any){

  //   console.log(a.value);
  //   console.log(p.value);
    
    
  //   var acnum=a.value
  //   var psw=p.value
  //   let userDetails=this.userDetails
  //   if(acnum in userDetails){
  //     if(psw==userDetails[acnum]['password']){
  //       alert("login success")
  //     }
  //     else{
  //       alert('invalid password')
  //     }
  //   }
  //   else{
  //     alert("user not exist or incurrect ac number")
  //   }
  
  // acChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno);
    

  // }
  // pasChange(event:any){
  //   this.pas=event.target.value
  //   console.log(this.pas);
    
    
  // }

  login(){
       var acnum=this.acno
       var psw=this.pas

       const result= this.ds.login(acnum,psw)
       if(result){
        alert('login success')
        this.router.navigateByUrl('dashboard')
       }
  }
      // let userDetails=this.userDetails
      // if(acnum in userDetails){
      //    if(psw==userDetails[acnum]['password']){
      //      alert("login success")

      //     //  redirection

      //     this.router.navigateByUrl('dashboard')
      //  }
      //    else{
      //      alert('invalid password')
      //    }
      //  }
      //  else{
      //    alert("user not exist or incurrect ac number")
      //  }
     }

  

