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
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: any;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<Product>();

  onRemove() {
    this.remove.emit(this.product.id);
  }

  onLike() {
    this.like.emit(this.product);
  }

  share(product: any, platform: 'whatsapp' | 'telegram') {
    const encodedUrl = encodeURIComponent(product.link);
    let shareUrl = '';

    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodedUrl}`;
    }

    window.open(shareUrl, '_blank');
  }
}
