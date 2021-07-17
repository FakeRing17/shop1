import { Component, OnInit } from '@angular/core';
import { ProducServiceService } from '../produc-service.service';
import { ListCart } from '../ListCart';
import { Product } from '../Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // constructor() { }
  constructor(private ProducServiceService: ProducServiceService) {}
  listCart: ListCart[] = [];

  ngOnInit() {
    this.ProducServiceService.ProductDataSource$.subscribe(list => {
      this.listCart = list;
      this.getTotal();
    });
    // this.getTotal();
  }
  total: number = 0;
  // console.log(listCart);
  getTotal() {
    this.total = 0;
    this.listCart.forEach(element => {
      this.total += element.price * element.quantity;
    });
    // this.total = 10;
  }

}
