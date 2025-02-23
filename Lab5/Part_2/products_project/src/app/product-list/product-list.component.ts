import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Product {
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
  rating: number;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<Product>();

  removeProduct(id: number) {
    this.remove.emit(id);
  }

  likeProduct(product: Product) {
    this.like.emit(product);
  }
}
