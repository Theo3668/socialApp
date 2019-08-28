import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  usersList
  constructor(private service:ServiceService, private route:Router) {

    this.service.getUser().subscribe(data => {

      this.usersList = data.map(e => {
        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }as Users;
      });
      
      console.log(this.usersList);
    })

   }

  ngOnInit() {
  }

}
