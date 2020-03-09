import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Emendas } from './shared/emenda.model';


@Injectable({
  providedIn: 'root'
})
export class ApiEmendasService {

  private apiPath = 'api/emendas';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Emendas[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEmendas)
    );
  }

  getById(ano: number): Observable<Emendas> {
    const url = `${this.apiPath}/${ano}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEmenda)
    );
  }

  getAllQuery(termoDaPesquisa: string): Observable<Emendas[]> {
    return this.getAll().pipe(
      map(emendas => this.getEmendasQuery(emendas, termoDaPesquisa))
    );
  }

  private getEmendasQuery(emendas: Emendas[], termoDaPesquisa: string) {
    // console.log(termoDaPesquisa);
    // console.log('Emendas', emendas);
    return emendas.filter(emenda => {

      if (termoDaPesquisa.toLowerCase() == emenda.estado.toLowerCase()) { return emenda };
      if (termoDaPesquisa.toLowerCase() == emenda.autor.toLowerCase()) { return emenda };
      if (termoDaPesquisa.toLowerCase() == emenda.regiao.toLowerCase()) { return emenda };
      if (termoDaPesquisa.toLowerCase() == emenda.funcao.toLowerCase()) { return emenda };
      if (termoDaPesquisa.toLowerCase() == emenda.municipio.toLowerCase()) { return emenda };
      if ( +termoDaPesquisa == emenda.ano ) { return emenda };

    });
  }

  // private
  private jsonDataToEmendas(jsonData: any[]): Emendas[] {
    const emendas: Emendas[] = [];
    jsonData.forEach(element => emendas.push(element as Emendas));
    return emendas;
  }

  private jsonDataToEmenda(jsonData: any): Emendas {
    return jsonData as Emendas;
  }

  private handleError(error: any): Observable<any> {
    console.log('Erro na requisição =>  ', error);
    return throwError(error);
  }

}
