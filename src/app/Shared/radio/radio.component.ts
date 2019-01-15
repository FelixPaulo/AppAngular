import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR ,ControlValueAccessor} from '@angular/forms';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioComponent), multi: true}],
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  
  @Input() options: RadioOption[];
  value: any;
  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value;
    this.onChange(this.value);
  }

  //Vai ser chamado pela diretivas quando querem passar um valor para o seu componente
  writeValue(obj: any): void {
    this.value = obj;
  }

  //tem que chamar a função recebita por parametro sempre que o valor interno do component mudar
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  //Registrar que o usuario entrou no componente
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }

  //
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }

}
