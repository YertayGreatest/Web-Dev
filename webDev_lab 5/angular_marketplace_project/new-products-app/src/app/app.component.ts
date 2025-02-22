import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  storeUrl: string;
  likes: number;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  categories = ['Refrigerator', 'Chairs', 'Satellite Phones', 'Laptops'];
  selectedCategory: string = this.categories[0];

  products: Product[] = [
    {
      id: 1,
      name: 'Refrigerator LG GC-B459MLWM gray',
      description: 'Total valume: 374\nChamber volume: 247\nFreezer capacity: 127',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h40/hde/85253298913310.jpg?format=gallery-medium',
      category: 'Refrigerator',
      storeUrl: 'https://kaspi.kz/shop/p/lg-gc-b459mlwm-seryi-116895924/?c=750000000',
      likes: 0
    },
    {
      id: 2,
      name: 'Refrigerator LG GC-B459MEWM beige',
      description:'Total valume: 374\nChamber volume: 247\nFreezer capacity: 127',
      imageUrl:'https://resources.cdn-kaspi.kz/img/m/p/h02/hcf/85254152880158.jpg?format=gallery-medium',
      category:'Refrigerator',
      storeUrl:'https://kaspi.kz/shop/p/lg-gc-b459mewm-bezhevyi-116902622/?c=750000000',
      likes: 0
    },
    {
      id: 3,
      name:'Refrigerator LG GC-B399SMCL silver',
      description: 'Total volume: 306\nChamber volume: 202\nFreezer capacity: 104',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h1f/64481491681310.jpg?format=gallery-medium',
      category: 'Refrigerator',
      storeUrl: 'https://kaspi.kz/shop/p/lg-gc-b399smcl-serebristyi-106378846/?c=750000000',
      likes: 0
    },
    {
      id:4,
      name:'Refrigerator Leadbros HD-159W white',
      description: 'The Leadbros HD-159W white two-chamber refrigerator is a reliable unit with a well-thought-out design and a spacious freezer.',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h5e/86930025414686.jpg?format=gallery-medium',
      category: 'Refrigerator',
      storeUrl: 'https://kaspi.kz/shop/p/leadbros-hd-159w-belyi-107845858/?c=750000000',
      likes: 0
    },
    {
      id: 5,
      name: 'Refrigerator Leadbros HD-159 black',
      description: 'Total volume: 157\nChamber volume: 109\nFreezer capacity: 48',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h47/h2e/84136167538718.jpg?format=gallery-medium',
      category: 'Refrigerator',
      storeUrl: 'https://kaspi.kz/shop/p/leadbros-hd-159-chernyi-106107741/?c=750000000',
      likes: 0
    },
    {
      id: 6,
      name: 'Chair C06, 80x46x40 cm, white',
      description: 'Thanks to the combination of plastic with metal and wood, the product fits organically into almost any environment, making the setting more natural and “live”. Another advantage of the model is its height, which is convenient for a dining table.',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium',
      category: 'Chairs',
      storeUrl: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
      likes: 0
    },
    {
      id: 7,
      name: 'Chair Chili, 86x45x37 cm, upholstery gray velour',
      description: 'Feels really good',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h3b/85982139088926.jpg?format=gallery-medium',
      category: 'Chairs',
      storeUrl: 'https://kaspi.kz/shop/p/stul-chili-86x45x37-sm-obivka-seryi-veljur-109319431/?c=750000000',
      likes: 0
    },
    {
      id:8,
      name: 'Chair Deputy, 100x44x45 cm, white, beige',
      description: 'well, as the name suggests',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h38/84461222297630.jpg?format=gallery-medium',
      category: 'Chairs',
      storeUrl: 'https://kaspi.kz/shop/p/stul-deputat-100x44x45-sm-belyi-bezhevyi-114371350/?c=750000000',
      likes: 0
    },
    {
      id: 9,
      name: 'Stool ZETA IMP-TV-056116, 45x35x35 cm, beige',
      description: 'interesting chair',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h39/86968753618974.jpg?format=gallery-medium',
      category: 'Chairs',
      storeUrl: 'https://kaspi.kz/shop/p/taburet-zeta-imp-tv-056116-45x35x35-sm-bezhevyi-100345101/?c=750000000',
      likes: 0
    },
    {
      id: 10,
      name: 'Stool ZETA Stool C, 47x27x27 cm, white',
      description: 'breaks easily',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pea/pc8/6744509.png?format=gallery-medium',
      category: 'Chairs',
      storeUrl: 'https://kaspi.kz/shop/p/taburet-zeta-taburet-s-47x27x27-sm-belyi-129551397/?c=750000000',
      likes: 0
    },
    {
      id: 11,
      name: 'Satellite phone Thuraya XT-Lite gray',
      description: 'Thuraya XT-Lite delivers reliable satellite communications at the best price. Designed specifically for cost-conscious consumers who want to stay connected without compromising on quality.',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h33/64071707033630.jpg?format=gallery-medium',
      category: 'Satellite Phones',
      storeUrl: 'https://kaspi.kz/shop/p/sputnikovyi-telefon-thuraya-xt-lite-seryi-101584383/?c=750000000',
      likes: 0
    },
    {
      id:12,
      name:'Satellite phone Inmarsat ISAT Phone 2 black',
      description: 'network charger with adapters, car charger, battery, adapter for external antenna',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h9f/64213916090398.jpg?format=gallery-medium',
      category: 'Satellite Phones',
      storeUrl: 'https://kaspi.kz/shop/p/sputnikovyi-telefon-inmarsat-isat-phone-2-chernyi-101167936/?c=750000000',
      likes: 0
    },
    {
      id: 13,
      name: 'Satellite phone Thuraya XT-Pro black',
      description: 'Works incredible',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/h5f/64211400884254.jpg?format=gallery-medium',
      category: 'Satellite Phones',
      storeUrl: 'https://kaspi.kz/shop/p/sputnikovyi-telefon-thuraya-xt-pro-chernyi-101169092/?c=750000000',
      likes: 0
    },
    {
      id: 14,
      name: 'Satellite phone Iridium 9555 black',
      description: 'Not the best look but still good',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb9/hd8/64012441485342.jpg?format=gallery-medium',
      category: 'Satellite Phones',
      storeUrl: 'https://kaspi.kz/shop/p/sputnikovyi-telefon-iridium-9555-chernyi-101167945/?c=750000000',
      likes: 0
    },
    {
      id: 15,
      name: 'Satellite phone Thuraya XT-Pro DUAL gray',
      description: 'just trust it is powerful',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/h5d/85128755118110.jpg?format=gallery-medium',
      category: 'Satellite Phones',
      storeUrl: 'https://kaspi.kz/shop/p/sputnikovyi-telefon-thuraya-xt-pro-dual-seryi-116514010/?c=750000000',
      likes: 0
    },
    {
      id: 16,
      name: 'Laptop Lenovo Legion 9 16"',
      description: ' A gaming beast with 64 GB RAM, 2 TB SSD, and Windows 11. Perfect for high-performance gaming and productivity.',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h56/hc5/86665488629790.jpg?format=gallery-medium',
      category: 'Laptops',
      storeUrl: 'https://kaspi.kz/shop/p/lenovo-legion-9-16-64-gb-ssd-2000-gb-win-11-16irx9-83g0002prk-118586968/?c=750000000',
      likes: 0
    },
    {
      id: 17,
      name: 'Laptop ASUS ROG Zephyrus M16 16"',
      description: 'Sleek, powerful, and versatile with 32 GB RAM, 2 TB SSD, and Windows 11 Pro, ideal for gamers and creators.',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/hdd/80737512325150.jpg?format=gallery-medium',
      category: 'Laptops',
      storeUrl: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-m16-16-32-gb-ssd-2000-gb-win-11-pro-gu604vy-nm040x-90nr0br3-m00400-110325756/?c=750000000',
      likes: 0
    },
    {
      id: 18,
      name: 'Laptop DELL XPS 15 9520 15.6"',
      description: 'Premium ultrabook with 32 GB RAM, 1 TB SSD, and Windows 11 Pro. A perfect blend of power and elegance.',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2e/h95/85372238069790.jpg?format=gallery-medium',
      category: 'Laptops',
      storeUrl: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-32-gb-ssd-1000-gb-win-11-pro-210-bdvf-15-117247427/?c=750000000',
      likes: 0
    },
    {
      id: 19,
      name: 'Laptop Apple MacBook Pro 16.2"',
      description: 'Ultimate performance with 36 GB RAM, 1 TB SSD, and macOS, designed for creative professionals seeking power and style.',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p10/16987867.jpg?format=gallery-medium',
      category: 'Laptops',
      storeUrl: 'https://chatgpt.com/c/67b9bfe0-2f58-8012-96dd-c3a26c344af3',
      likes: 0
    },
    {
      id: 20,
      name: 'HP OMEN 17.3"',
      description: 'High-end gaming laptop with 32 GB RAM, 2 TB SSD, and DOS. Built for immersive gaming and heavy multitasking.',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hed/h4a/85198226620446.jpg?format=gallery-medium',
      category: 'Laptops',
      storeUrl: 'https://kaspi.kz/shop/p/hp-omen-17-3-32-gb-ssd-2000-gb-dos-17-ck2001ci-7z7p4ea-111970661/?c=750000000',
      likes: 0
    }
  ];

  get filteredProducts(): Product[] {
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
