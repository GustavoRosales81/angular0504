import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit{
  constructor(private vehiculoService: VehiculoService) { }

  filtrarPor:string = "";
  mostrarImagen:boolean = false;
  listavehiculo:any[] = [];

  ngOnInit() {
    this.listavehiculo = this.vehiculoService.getVehiculos();
  }

  mostrarAlerta(calificacion:any){
    alert("La calificacion es: " + calificacion)
  }
  
  eliminarvehiculo(vehiculoParam:any){

  } 

  filtrar(value:string){
this.listavehiculo = this.vehiculoService.getvehiculosFiltro(value);
  }

  getListavehiculos (){
    this.listavehiculo = this.vehiculoService.getvehiculosFiltro(this.filtrarPor);
    return this.listavehiculo;
  }
}