import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
      @if (cartService.cartIsEmpty()) {
          <div class="text-center my-6">No Items in Cart</div>
      } @else {
          <div class="overflow-x-auto p-4">
              <table class="table table-zebra">
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Cost</th>
                      <th>Remove</th>
                  </tr>
                  </thead>
                  <tbody>

                      @for (item of cartService.items(); track item.id) {
                          <tr>
                              <th>{{ $index + 1}}</th>
                              <td>{{ item.name }}</td>
                              <td>€ {{item.cost}}</td>
                              <td class="cursor-pointer" (click)="cartService.removeFromCart(item)">❌</td>
                          </tr>
                      }
                  </tbody>
              </table>
          </div>

          <div class="text-xl my-6 flex justify-end p-4">
              TOTAL: € {{cartService.totalCartCost()}}
          </div>
      }
  `,
  styles: ``
})
export default class CartComponent {
  cartService = inject(CartService)
}