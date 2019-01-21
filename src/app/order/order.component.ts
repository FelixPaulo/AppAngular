import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/Shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { OrderItem, Order } from './order.model';
import {Router} from '@angular/router';

//React form
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  delivery: number = 8;
  
  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];

  orderForm: FormGroup;  

  //FormBuilder react form
  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //FormBuilder react form
    this.orderForm = this.formBuilder.group({
      // name: '',
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),//duas formas 
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''), 
      number: this.formBuilder.control(''),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('')
    });
  }

  itemsValue(): number{
    return this.orderService.itemsValue();
  }

  cartItems() : CartItem[]{
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem){
    this.orderService.remove(item);
  }

  checkOrder(order: Order){
    //transformando item cartItem para o time orderItem
    order.orderItems = this.cartItems().map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order)
    .subscribe((orderId: string) => {
      this.router.navigate(['/order-summary']);
      console.log(`Compra concluida: ${orderId}`);
      this.orderService.clear();
    });
    // console.log(order);
  }
}
