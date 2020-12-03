import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  cuenta = 0;
  nombre = 'Ángel'

  constructor() { }

  ngOnInit(): void {
  }

  incrementar(): void {
    this.cuenta++;
  }

  decrementar(): void {
    this.cuenta--;
  }

  cambiaNombre(event) {
    this.nombre = event.target.value;
  }

}
