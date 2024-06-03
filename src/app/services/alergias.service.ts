import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Alergias } from '../models/alergias';

const base_url=environment.csbase
@Injectable({
  providedIn: 'root'
})
export class AlergiasService {
  private url=`${base_url}/alergia`
  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Alergias[]>(this.url);
  }
}
