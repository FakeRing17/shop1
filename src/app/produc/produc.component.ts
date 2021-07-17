import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ListCart } from '../ListCart';
import { ProducServiceService } from '../produc-service.service';
@Component({
  selector: 'app-produc',
  templateUrl: './produc.component.html',
  styleUrls: ['./produc.component.css']
})
export class ProducComponent implements OnInit {

  constructor(private ProducServiceService: ProducServiceService) {
    this.getProduct();
  }
  quantity: number[] = [];
  products: Product[] = [];
  ngOnInit(): void {
    this.getProduct();
  }
  listCart: ListCart[] = [];
  addCart(product: Product, index: number) {
    this.listCart.push(
      new ListCart(
        product.id,
        product.name,
        product.price,
        this.quantity[index]
      )
    );
    this.quantity[index] = 0;
    this.ProducServiceService.ProductDataSource$.next(this.listCart);
  }
  checkCart(i: number): number {
    return this.listCart.filter(ListCart => ListCart.id == i).length;
    // return 1;
  }
  // checkCart(i: number): boolean {
  //   if (this.listCart.filter(ListCart => ListCart.id == i).length > 0)
  //     return false;
  //   return true;
  // }
  getProduct() {
    this.ProducServiceService.getProduc().subscribe(
      data => {
        this.products = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
