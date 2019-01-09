import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
    items: CartItem[] = [];

    clear(){
        this.items = [];
    }

    addItem(item:MenuItem){
        
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1; 
        }else{
            this.items.push(new CartItem(item));
        }
    }

    removeItem(item:CartItem){
        //remover apartir do indece  a quantidade
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number{
        //substitui o item pelo valor do intem
        return this.items
        //trocando para o valor do cartItem
        .map(item => item.value())
        //soma a quantitade + o preco e o 0 indica o valor inicial
        .reduce((prev, value) => prev+value, 0);
    }
}