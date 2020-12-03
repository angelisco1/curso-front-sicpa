import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

const URL = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  getTareas(numTareas: number) {
    //GET
    return this.http.get(URL)
      .pipe(
        map((arTareas: Array<any>) => {
          return arTareas.splice(0, numTareas)
        })
      );
  }
}
