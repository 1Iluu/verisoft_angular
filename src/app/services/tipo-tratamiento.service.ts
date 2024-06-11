import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoTratamiento } from '../models/tipoTratamiento';

const base_url = environment.csbase;
@Injectable({
  providedIn: 'root'
})
export class TipoTratamientoService {
  private url = `${base_url}/tipotratamientos`;
  private listaCambio = new Subject<TipoTratamiento[]>();

  constructor(private httpClient: HttpClient) { }
  list() {
    return this.httpClient.get<TipoTratamiento[]>(this.url);
  }
  insert(e: TipoTratamiento) {
    return this.httpClient.post(this.url, e);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.httpClient.get<TipoTratamiento>(`${this.url}/${id}`);
  }
  update(a: TipoTratamiento) {
    return this.httpClient.put(this.url, a);
  }
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  setList(listaNueva: TipoTratamiento[]) {
    console.log(listaNueva)
    this.listaCambio.next(listaNueva);
  }
  setMockList() {
    this.listaCambio.next([
      {
        id: 1,
        nombreTratamiento: 'Quimioterapia',
      },
      {
        id: 2,
        nombreTratamiento: 'Radioterapia',
      },
      {
        id: 3,
        nombreTratamiento: 'Cirugía',
      },
      {
        id: 4,
        nombreTratamiento: 'Inmunoterapia',
      },
      {
        id: 5,
        nombreTratamiento: 'Terapia hormonal',
      },
      {
        id: 6,
        nombreTratamiento: 'Terapia dirigida',
      },
      {
        id: 7,
        nombreTratamiento: 'Trasplante de médula ósea',
      }
    ]);
  }
}
