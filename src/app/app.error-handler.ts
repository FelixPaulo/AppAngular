import {Response} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'

export class ErrorHandler {
    //response ou quualquer coisa
    static handleError(error: Response | any){

        let errorMessage: string;

        //Se erro for uma instancia de response
        if(error instanceof Response){
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
        }else{
            errorMessage = error.toString();
        }

        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}