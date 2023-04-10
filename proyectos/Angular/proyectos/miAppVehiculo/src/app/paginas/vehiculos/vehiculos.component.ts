import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vehiculo } from 'src/app/interfaces/vehiculo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit{
  constructor(private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder) { }

  filtrarPor:string = "";
  mostrarImagen:boolean = false;
  listavehiculo:any[] = [];
  formularioVehiculo: FormGroup;

  ngOnInit() {
    //this.listavehiculo = this.vehiculoService.getVehiculos();
    this.consultavehiculos();
    this.formularioVehiculo = this.formBuilder.group( {
      "marca":[null],
      "modelo":[null],
      "codigo":[null],
      "anio":[null],
      "calificacion":[null],
      "foto":[null]
    })
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
  guardarvehiculo(){
    let vehiculo:Vehiculo = this.formularioVehiculo.value;
    this.vehiculoService.agregarvehiculo(vehiculo).subscribe((respuesta)=> {
      alert(respuesta.mensaje);
      if (respuesta.codigo == 1){
        this.consultavehiculos();    
      }
    });
  }
}