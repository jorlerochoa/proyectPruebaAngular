import { ElementRef, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  constructor(private personajes:ServiciosService) { }

  @ViewChild('txtbusqueda') txtbusqueda!:ElementRef;

  @Output() valorindice:EventEmitter<number>=new EventEmitter<number>();

  ngOnInit(): void {
  }

  busquedapersonajes(){


    
    
  }
}
