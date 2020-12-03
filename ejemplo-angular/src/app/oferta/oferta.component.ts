import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  @Input() tarea = { title: 'T', completed: true };

  constructor() { }

  ngOnInit(): void {
  }

  getStyles() {
    return {
      backgroundColor: this.getColorFondo()
    }
  }

  getColorFondo() {
    return this.tarea.completed ? '#aaa' : '#fff'
  }

}
