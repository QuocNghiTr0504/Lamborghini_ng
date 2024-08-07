import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { GetProductsService } from 'src/app/service/product/get-products.service';
import { ThemeService } from 'src/app/service/theming/theme.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    detailsProduct:Product| null =null;
    productId:number=0;
    darkMode = false;
  constructor(private getProduct:GetProductsService, private route:ActivatedRoute, private theme:ThemeService){
    this.theme.getDarkMode().subscribe((darkMode) =>{
      this.darkMode = darkMode
    })
  }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      this.productId = +params['id'];
      this.getProduct.getProductById(this.productId).subscribe(data=>{
        this.detailsProduct = data;
      })
    })
 
  }

}
