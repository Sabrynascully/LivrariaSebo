import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {


    constructor(private http : HttpClient ) { }

   metodoPost(form:any){
         return this.http.post("https://app-xperiencebook.herokuapp.com/",form)
}


}
