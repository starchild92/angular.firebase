import { Component, OnInit } from '@angular/core';

/**
 * Cuando una ruta no existe esta debe ser la página a mostrar
 */
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
