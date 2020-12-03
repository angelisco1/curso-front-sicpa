import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { OfertasService as TareasService } from '../ofertas.service';

@Component({
  selector: 'app-ofertas-trabajo',
  templateUrl: './ofertas-trabajo.component.html',
  styleUrls: ['./ofertas-trabajo.component.css']
})
export class OfertasTrabajoComponent implements OnInit {
  // tarea = { title: 'Tarea 1', completed: false };
  tareas: any = [
    // { title: 'Tarea 1', completed: false },
    // { title: 'Tarea 2', completed: false }
  ]
  mostrarTareasCompletas = true;

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.tareasService.getTareas(15)
      // .pipe(
      //   map((arTareas: Array<any>) => {
      //     return arTareas.filter(t => !t.completed)
      //   })
      // )
      .subscribe((tareas) => {
        console.log(tareas);
        this.tareas = tareas;
      })
  }

  toggleMostrarCompletadas() {
    this.mostrarTareasCompletas = !this.mostrarTareasCompletas;
  }

}
