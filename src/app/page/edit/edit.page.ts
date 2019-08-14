import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  obj = {
    key:'',
    Brand:'',
    Model:'',
    Year:''
  };
  constructor(private service: ServiceService, private route:ActivatedRoute, private nav:Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log(params)

      this.obj.key = params.key
      console.log(this.obj.key),

      this.obj.Brand = params.Brand
      console.log(this.obj.Brand),

      this.obj.Model = params.Model
      console.log(this.obj.Model),

      this.obj.Year = params.Year
      console.log(this.obj.Year)
    })

  }

  onBack(){
    this.nav.navigateByUrl("log-in");
  }
  onUpdate(obj){
    this.service.update(obj, obj.key);
    alert("Item updated");
  }

}
