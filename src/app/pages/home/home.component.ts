import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
      <div class="flex gap-6 justify-center">
        @for (product of products(); track product.id) {
            <div class="card w-full bg-base-100 shadow-xl">
                <figure><img [src]="product.image" [alt]="product.name" /></figure>
                <div class="card-body">
                    <div class="flex justify-between">
                      <h2 class="card-title">{{product.name}}</h2>
                      <div class="card-title">€ {{product.cost}}</div>
                    </div>
                    <p>{{product.description}}</p>
                    <div class="card-actions justify-end">
                    @if (settingsService.isShopEnabled()) {
                            <button
                                    class="btn btn-primary"
                                    (click)="cartService.addToCart(product)"
                            >
                                Add to Cart
                            </button>
                        }
                    </div>
                </div>
            </div>
        }
      </div>
    
    <pre>{{cartService.items() | json}}</pre>
  `,
  styles: ``
})
export default class HomeComponent {
  products = signal<Product[]>(initialState);
  cartService = inject(CartService);
  settingsService = inject(SettingsService);


}


const initialState: Product[] =[
  {
    id: 1,
    name: "T-Shirt",
    image: "assets/images/ang1.png",
    description: "lorem...",
    cost: 10
  },
  {
    id: 2,
    name: "Bullet",
    description: "lorem...",
    image: "assets/images/ang2.png",
    cost: 5
  },
  {
    id: 3,
    name: "Pic",
    description: "lorem...",
    image: "assets/images/surf.avif",
    cost: 2
  }
]