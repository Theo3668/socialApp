import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  item = {
    Brand: '',
    Model: '',
    Year: ''
  };
  constructor(private router:Router, private serv: ServiceService, private alrt:AlertController) { }

  ngOnInit() {
  }
  submit(){
    this.serv.post(this.item, this.alrt);
    alert("New item added");
    this.router.navigateByUrl("log-in");
  }

}
