import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';


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
  standalone: true,
  imports: [CommonModule, ProductItemComponent], // ✅ Add imports
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  @Input() products: any[] = [];
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<Product>();

  removeProduct(productId: number) {
    this.remove.emit(productId);
  }

  likeProduct(product: Product) {
    this.like.emit(product);
  }
}
