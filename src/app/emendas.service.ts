import { map } from 'rxjs/operators';
import { Emendas } from './shared/emenda.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { forkJoin, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EmendasBd } from './dados/emendas';

@Injectable()
export class EmendasService{

    emendasUrl = EmendasBd.EmendasBd();


    constructor(private http: HttpClient){};


    public getEmendas(): Observable<any[]> {
        return this.http.get<any[]>(this.emendasUrl)
        .pipe( map( (data: any) => data ) );
    }


};