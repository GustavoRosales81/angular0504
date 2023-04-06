import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/interfaces/vehiculo';
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
    //this.listavehiculo = this.vehiculoService.getVehiculos();
    this.consultavehiculos();
  }

  consultavehiculos(){
    this.vehiculoService.getVehiculos().subscribe((respuesta)=>{
      if(respuesta.codigo == 1 ){
        this.listavehiculo = respuesta.data;
      }
    }); 

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
  return this.listavehiculo;
    /*  this.listavehiculo = this.vehiculoService.getvehiculosFiltro(this.filtrarPor);
    return this.listavehiculo;*/
  }
  guardarvehiculo(vehiculo:Vehiculo){
    this.vehiculoService.agregarvehiculo(vehiculo).subscribe((respuesta)=> {
      alert(respuesta.mensaje);
      if (respuesta.codigo == 1){
        this.consultavehiculos();    
      }
    });
  }
}