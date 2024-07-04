  import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from 'src/app/models/product';
import { GetProductsService } from 'src/app/service/product/get-products.service';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent {
  productList!: Product[];
  PageProduct: Product[] = [];
  dataSource: any;
  pageSize = 4;  

  
  constructor(private httpProducts: GetProductsService){  
  }

  ngOnInit(): void {
    const savePagesize = localStorage.getItem('pageSize');
    if(savePagesize){
      this.pageSize = +savePagesize;
    }

    this.httpProducts.getProduct().subscribe((data:any) => {
      this.productList = data;
      console.log(this.productList)
      this.UpdateRenderProduct(0);
  }); 
  }

  UpdateRenderProduct(pageIndex: number){
    const startPage = pageIndex * this.pageSize;
    const endPage = Math.min(startPage + this.pageSize, Number(this.productList.length))
    this.PageProduct = this.productList.slice(startPage, endPage);
  }

  pageChanged(event:any) {
    const pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    localStorage.setItem('pageSize', this.pageSize.toString())
    this.UpdateRenderProduct(pageIndex);
  }
}
