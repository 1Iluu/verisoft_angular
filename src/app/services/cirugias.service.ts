import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Cirugias } from '../models/cirugias';

const base_url=environment.csbase
@Injectable({
  providedIn: 'root'
})
export class CirugiasService {
  private url=`${base_url}/cirugias`

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Cirugias[]>(this.url);
  }
}
