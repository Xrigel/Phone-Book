import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Card } from '../models/card.model';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CardsService {
baseUrl="https://localhost:7187/api/Cards";
  constructor(private http:HttpClient) { }
  GetAllCards():Observable<Card[]>{
    return this.http.get<Card[]>(this.baseUrl);
  }
  addCard(card:Card):Observable<Card>{
    card.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Card>(this.baseUrl,card);
  }
  DeleteCard(id:string):Observable<Card>{

    return this.http.delete<Card>(this.baseUrl +'/'+ id);
  }
  UpdateCard(card:Card):Observable<Card>{
    return this.http.put<Card>(this.baseUrl+'/'+card.id,card);
  }
}
