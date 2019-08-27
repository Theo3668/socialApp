import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string = ""
  password: string = ""
  confirmPassword: string = ""

  constructor(private fireAuth: AngularFireAuth, private route:Router) {}

  async login(){
    const { email, password } = this
    try{
      const result = await this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      this.fireAuth.auth.currentUser.uid  
      this.route.navigateByUrl("log-in")
    } catch(err) {
      console.dir(err)
      if(err.code === "auth/invalid-email"){
        return console.error("user does not exist")
      }
    }
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
