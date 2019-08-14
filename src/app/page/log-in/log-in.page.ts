import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  itemList
  constructor(private service:ServiceService, private route:Router) {

    this.service.getItem().subscribe(data => {

      this.itemList = data.map(e => {
        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }as Cars;
      });
      
      console.log(this.itemList);
    })

   }

  ngOnInit() {
  }

  onAdd(){
    this.route.navigateByUrl("add-item");
  }

  onSelect(item){
    this.route.navigate(['/edit'], { queryParams:{key: item.key, Brand: item.brand, Model: item.model, Year: item.year}})
  }

  onDelete(key){
    this.service.delete(key);
    alert("Item deleted");
    this.route.navigateByUrl('');
  }

}
