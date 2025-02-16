import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}



@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
      name: 'Laptop ThundeRobot 911 X Wild Hunter G2 Pro 15.6"',
      description: '/ 16 Gb / SSD 512 Gb / Win 11 Pro /',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'Laptop Apple MacBook Air 13 2022 13.6"',
      description: '/ 8 Gb / SSD 256 Gb / macOS / MLXW3',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
      name: 'Laptop Lenovo IdeaPad 3 15.6"',
      description: '4 Gb / SSD 256 Gb / Without OS / 15IGL05 / 81WQ00EMRK',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium',
      name: 'Laptop Acer Aspire 3 15.6"',
      description: ' 8 Gb / SSD 256 Gb / Win 11 / A315-35 / NX.A9AEX.00H',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p59/p53/15221547.jpg?format=gallery-medium',
      name: 'Laptop Lenovo LOQ 15.6"',
      description: '16 Gb / SSD 512 Gb / Without OS / 15IAX9 / 83GS005NRK',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/lenovo-loq-15-6-16-gb-ssd-512-gb-bez-os-15iax9-83gs005nrk-120581412/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-medium',
      name: 'Laptop Apple MacBook Pro 14 2024',
      description: '24 Gb / SSD 512 Gb / macOS / MX2H3',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h8e/83606463807518.jpg?format=gallery-medium',
      name: 'Laptop ASUS TUF Gaming F15 15.6"',
      description: '16 Gb / SSD 512 Gb / DOS / FX507ZC4-HN143 / 90NR0GW1-M00B40',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-15-6-16-gb-ssd-512-gb-dos-fx507zc4-hn143-90nr0gw1-m00b40-113186739/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/hb1/86088053227550.jpg?format=gallery-medium',
      name: 'Laptop Acer Nitro V 15 15.6"',
      description: '16 Gb / SSD 512 Gb / Without OS / ANV15-41-R70B / NH.QSJER.001',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/acer-nitro-v-15-15-6-16-gb-ssd-512-gb-bez-os-anv15-41-r70b-nh-qsjer-001-119709941/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/hdf/86634043113502.png?format=gallery-medium',
      name: 'Laptop ASUS VivoBook 15 15.6"',
      description: '16 Gb / SSD 512 Gb / Without OS / X1504ZA-BQ1144',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-16-gb-ssd-512-gb-bez-os-x1504za-bq1144-121869011/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h85/85538458861598.jpg?format=gallery-medium',
      name: 'Laptop Apple MacBook Air 13 2024 13.6"',
      description: '16 Gb / SSD 512 Gb / macOS / MXCV3',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxcv3-117789830/?c=750000000'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  // share whatsapp
  shareOnWhatsApp(product: Product): void {
    const url = `https://wa.me/?text=${encodeURIComponent(product.link)}`;
    window.open(url, '_blank');
  }

  // share on tg
  shareOnTelegram(product: Product): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }

}
