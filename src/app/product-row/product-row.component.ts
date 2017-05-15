import { Component, OnInit } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class': 'item'},
  template: `
    <img class="product-image" [src]="product.imageUrl">
    <div class="content">
      <div class="header">{{ product.name }}</div>
      <div class="meta">
        <div class="product-sku">SKU #{{ product.sku }}</div>
      </div>
      <div class="description">
          <div class="product-department">
      <span *ngFor="let name of product.department; let i=index">
        <a href="#">{{ name }}</a>
        <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
      </span>
    </div>
      </div>
    </div>
    <div class="price-display">\${{ price }}</div>
  `
})
export class ProductRowComponent {
	product: Product;
}

