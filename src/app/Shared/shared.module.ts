import { NgModule } from "@angular/core";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";

import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    //os modulos que importar este modulo nao irá precisar importar esses modulos exports
    exports: [InputComponent, RadioComponent, 
             RatingComponent, CommonModule, 
             FormsModule, ReactiveFormsModule]
})

export class SharedModule{}