import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // email: string = ""
  // password: string = ""
  // confirmPassword: string = ""

  users = {} as Users;

  constructor(private fireAuth: AngularFireAuth, private angularFire: AngularFirestore,private route:Router) {}

  async login(users:Users){
    // const { email, password } = this
    try{
      const result = await this.fireAuth.auth.signInWithEmailAndPassword(users.email, users.password)
      this.fireAuth.auth.currentUser.uid  
      this.route.navigateByUrl("log-in/profile")
    } catch(err) {
      console.dir(err)
      if(err.code === "auth/invalid-email"){
        return console.error("user does not exist")
      }
    }
  }

  async signIn(users:Users){
    // const { confirmPassword, password } = this
    if(users.password !== users.confirmPassword){
        return console.error("passwords don't match")
    }

    try{
      const results = await this.fireAuth.auth.createUserWithEmailAndPassword(users.email, users.password)
      .then(data => {return this.angularFire.collection('users').doc(data.user.uid).set({
        userName: users.userName,
        fullName: users.fullName,
        gender: users.gender,
      })})
      console.log(results)
      location.reload();
    } catch(err){
      console.dir(err)
      if(err.code === "auth/weak-password"){
        return console.error("weak password")
      }
    }
  }


}
