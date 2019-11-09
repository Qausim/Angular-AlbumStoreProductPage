import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Album } from '../album';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;
  // Inject an instance of ProductService
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
