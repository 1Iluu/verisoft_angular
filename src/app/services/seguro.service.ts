import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Seguro } from '../models/seguro';



const base_url = environment.csbase
@Injectable({
  providedIn: 'root'
})
export class SeguroService {
  private url =`${base_url}/seguros`

  constructor(private hhtp:HttpClient) { }
  list(){
    return this.hhtp.get<Seguro[]>(this.url)
  }
}
