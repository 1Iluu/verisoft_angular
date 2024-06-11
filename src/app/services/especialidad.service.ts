import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Subject } from 'rxjs';
import { Especialidad } from '../models/especialidad';
import { HttpClient } from '@angular/common/http';

const base_url = environment.csbase;
@Injectable({
  providedIn: 'root',
})
export class EspecialidadService {
  private url = `${base_url}/especialidades`;
  private listaCambio = new Subject<Especialidad[]>();
  constructor(private httpClient: HttpClient) {}
  list() {
    return this.httpClient.get<Especialidad[]>(this.url);
  }
  insert(e: Especialidad) {
    return this.httpClient.post(this.url, e);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.httpClient.get<Especialidad>(`${this.url}/${id}`);
  }
  // TODO: this method is not implemented in the backend
  update(a: Especialidad) {
    return this.httpClient.put(this.url, a);
  }
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  setList(listaNueva: Especialidad[]) {
    console.log(listaNueva)
    this.listaCambio.next(listaNueva);
  }
  setMockList() {
    this.listaCambio.next([
      {
        id: 1,
        nombreEspecialidad: 'Oncología',
        complejidad: 'Alta',
      },
      {
        id: 2,
        nombreEspecialidad: 'Traumatología',
        complejidad: 'Media',
      },
      {
        id: 3,
        nombreEspecialidad: 'Cardiología',
        complejidad: 'Alta',
      },
      {
        id: 4,
        nombreEspecialidad: 'Pediatría',
        complejidad: 'Baja',
      },
      {
        id: 5,
        nombreEspecialidad: 'Neurología',
        complejidad: 'Alta',
      },
      {
        id: 6,
        nombreEspecialidad: 'Oftalmología',
        complejidad: 'Media',
      }
    ])
  }
}
