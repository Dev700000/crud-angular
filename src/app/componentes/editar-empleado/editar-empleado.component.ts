import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
import {CrudService} from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
   formularioAgregar:FormGroup;
  id:any;

  constructor(
    public formulario:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private crudservice:CrudService,
     private routeador:Router
    ) {
        this.id=this.activatedRoute.snapshot.paramMap.get('id');
        console.log(this.id);
        this.crudservice.ObtenerEmpleado(this.id).subscribe(respuesta=>{
          console.log(respuesta);
          this.formularioAgregar.setValue({
            nombre:respuesta[0]['nombre'],
            correo:respuesta[0]['correo']

          });
        }
      );

        this.formularioAgregar=this.formulario.group({
          nombre:['nombre'],
          correo:['correo']
          
        })
     }

  ngOnInit(): void {

  }
  enviarDatos():any{
      console.log(this.id);
      console.log(this.formularioAgregar.value);
      this.crudservice.ActualizarEmpleado(this.id,this.formularioAgregar.value).subscribe(()=>{
        this.routeador.navigateByUrl('/listar-empleado');
      });
    }

}
