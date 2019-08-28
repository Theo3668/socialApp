import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  list;
  writePost;
  private itemDoc: AngularFirestoreDocument<Cars>; 
  private usersDoc: AngularFirestoreDocument<Users>;
  
  constructor(private dataFire: AngularFirestore) { }

  // retrieve users
  getUser(){
    return this.dataFire.collection('users').snapshotChanges();
  }

  // retrieve list
  getItem(){
    return this.dataFire.collection('cars').snapshotChanges();
  }

  // add item on list
  post(item, alert){
    this.writePost = this.dataFire.collection<any>('cars');
    this.writePost.add(item).then(() => {
      console.log("added successful")
    });
  }

  // update/edit item on list
  update(obj, key){
    this.itemDoc = this.dataFire.doc<Cars>('cars/' + key);
    this.itemDoc.update(obj);
  }

  // delete item on list
  delete(key){
    this.dataFire.doc('cars/' + key).delete();
  }

}
