import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentUser:any
  currentAcno:any


  userDetails: any = {
    1000: { acno: 1000, username: 'amal', password:123, balance: 100000 ,transaction:[]},
    1001: { acno: 1001, username: 'anu', password:123, balance: 200000 ,transaction:[]},
    1002: { acno: 1002, username: 'joyal', password:123, balance: 150000,transaction:[] },
    1003: { acno: 1003, username: 'anaga', password:123, balance: 100000 ,transaction:[]}
  };

  constructor() {}
  Register(acno: any, username: any, password: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      return false;
    } else {
      userDetails[acno] = { acno, username, password, balance: 0 };
      console.log(userDetails);

      return true;
    }
  }

  login(acnum: any, psw: any) {
    let userDetails = this.userDetails;
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]['password']) {
        this.currentUser=userDetails[acnum]['username']
        this.currentAcno=acnum
        return true
        //   alert("login success")

        //  //  redirection

        //  this.router.navigateByUrl('dashboard')
      } 
      else {
        alert('invalid password');
        return false;
      }
    } 
    else {
      alert('user not exist or incurrect ac number');
      return false;
    }
  }


  deposit( acnum:any,pswrd:any,amnt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amnt)
    if(acnum in userDetails){
      if(pswrd==userDetails[acnum]['password']){
        userDetails[acnum]['balance']+=amount
        userDetails[acnum]['transaction'].push({type:'CREDIT',amount })
        return userDetails[acnum]['balance']
      }
      else{
        alert('incorrect paasword')
      }
    }
    else{
      alert('user not exist')
      return false
    }
  }
  withdraw(acnum:any,pswrd:any,amnt:any){
    let userDetails= this.userDetails
     let amount = parseInt(amnt)
     if(acnum in userDetails){
      if(pswrd == userDetails[acnum]['password']){
        if(amount < userDetails[acnum]['balance'] ){
          userDetails[acnum]['balance'] -=amount
          userDetails[acnum]['transaction'].push({type:'DEBIT',amount })

          return userDetails[acnum]['balance']
        }
       
        else{
          alert('insufficient balance')

        }
      }
      else{
        alert('incorrect password ')
      }
     }
     else{
      alert('user dosent exist')
      return false
     }
  }

  getTransaction(acno:any){
   return this.userDetails[acno]['transaction']
  }

}
