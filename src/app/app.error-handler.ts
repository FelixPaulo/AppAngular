import {HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'

export class ErrorHandler {
    //response ou quualquer coisa
    static handleError(error: HttpErrorResponse | any){

        let errorMessage: string;

        //Se erro for uma instancia de response
        if(error instanceof HttpErrorResponse){
            const body = error.error
            errorMessage = `${error.status}: ${error.status} - ${error.statusText || ''} ${body}`;
            // errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
        }else{
            errorMessage = error.message ? error.message : error.toString();
        }

        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}