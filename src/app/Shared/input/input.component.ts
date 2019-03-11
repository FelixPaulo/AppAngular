import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel, FormControlName} from '@angular/forms';


@Component({
  // selector: 'mt-input',
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() input: any;
  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showTip: boolean = true;

  //template form
  @ContentChild(NgModel) model: NgModel;

  //FormBuilder react form
  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  //vai ser chamando quando o conteudo for chamado "conteudo é o que vai ficar no lugar de ngmodel"
  ngAfterContentInit(): void {
    this.input = this.model || this.control;
    if(this.input === undefined){
      throw new Error('Esse component precisa ser usado com sua diretiva ngModel ou formControlName');
      
    }
  }

  hasSuccess(): boolean{
   return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
