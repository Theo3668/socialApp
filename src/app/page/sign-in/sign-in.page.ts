import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  email: string = ""
  password: string = ""
  confirmPassword: string = ""

  constructor(public fireAuth: AngularFireAuth, private route:Router) { }

  ngOnInit() {
  }

  async signIn(){
    const { email, password, confirmPassword } = this
    if(password !== confirmPassword){
        return console.error("passwords don't match")
    }

    try{
      const results = await this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      console.log(results)
      this.route.navigateByUrl("home")
    } catch(err){
      console.dir(err)
      if(err.code === "auth/weak-password"){
        return console.error("weak password")
      }
    }
  }

}
