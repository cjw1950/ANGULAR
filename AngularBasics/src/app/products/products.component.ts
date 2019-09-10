import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  id:number;
  name:string;
  price:number;
  constructor() {
   this.id=1;
   this.name= "mac book pro";
   this.price = 1300;

   }
  public getId():number{
      return this.id;
   }

  public getName(): string(){
     return this.name;
   }

  public getPrice(): number{
        return this.price;
   }


  ngOnInit() {
  }

}
