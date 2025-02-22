import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})

export class ProductItemComponent {
  @Input() product: any;
  hasLiked: boolean = false;
  @Output() remove = new EventEmitter<number>();

  incrementLikes(): void {
    if (this.hasLiked) {
      this.product.likes--;
      this.hasLiked = false;
    } else {
      this.product.likes++;
      this.hasLiked = true;
    }
    
  }

  onRemove(): void {
    this.remove.emit(this.product.id);
  }

  getWhatsAppShareUrl(): string {
    const text = `Check out ${this.product.name}: ${this.product.description}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  getTelegramShareUrl(): string {
    const text = `Check out ${this.product.name}: ${this.product.description}`;
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.storeUrl)}&text=${encodeURIComponent(text)}`;
  }
}
