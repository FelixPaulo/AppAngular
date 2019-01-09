import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {MenuItem} from "./menu-item.model";
@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  //Sempre que tiver uma propriedade que o componente parent vai informar tem que declarar como @input
  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem);
  }
}
