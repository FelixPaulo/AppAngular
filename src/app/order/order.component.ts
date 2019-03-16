import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/Shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { OrderItem, Order } from './order.model';
import {Router} from '@angular/router';
import 'rxjs/add/operator/do';

//React form
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
   
  delivery: number = 8;
  orderId: string;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  orderForm: FormGroup;  
  
  //FormBuilder react form
  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //FormBuilder react form
    this.orderForm = this.formBuilder.group({
      // name: '',
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),//duas formas
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]), 
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]), 
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo});
  }

  //Checa o valor de dois campos validando se sao iguais, recebendo o grupo pra poder checar e atraves do metodo get pego a referencia da propriedade
  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    //Valor que passar tem que ser igual ao valor da propriedade que defini no grupo exemplo o email
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if(!email || !emailConfirmation){
      return undefined;
    }

    if(email.value !== emailConfirmation.value){
      // o nome da chave pode ser o nome que eu quiser
      return {emailsNotMatch: true};
    }else{
      return undefined;
    }

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
    .do((orderId: string) =>{
      this.orderId = orderId;
    })
    .subscribe((orderId: string) => {
      this.router.navigate(['/order-summary']);
      console.log(`Compra concluida: ${orderId}`);
      this.orderService.clear();
    });
    // console.log(order);
  }

  isOrderCompleted(): boolean {
    return this.orderId !== undefined;
  }

}
