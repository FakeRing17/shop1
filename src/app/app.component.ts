import { Component, OnInit } from '@angular/core';
import { ProducServiceService } from './produc-service.service';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ProducServiceService: ProducServiceService)
  {
    this.getProduct();
  }
  products : Product[] = [];
  ngOnInit(): void{
    this.getProduct();
  }
  getProduct(){
    this.ProducServiceService.getProduc().subscribe(
      data => {
        this.products = data;
      },
      err => {
        console.log(err);
      }
    )
  }
}
