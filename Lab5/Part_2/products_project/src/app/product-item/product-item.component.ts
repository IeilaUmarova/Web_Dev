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
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<Product>();

  onRemove() {
    this.remove.emit(this.product.id);
  }

  onLike() {
    this.like.emit(this.product);
  }
}
