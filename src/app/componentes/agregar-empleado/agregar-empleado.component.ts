import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {CrudService} from 'src/app/servicio/crud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  formularioAgregar:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private routeador:Router
    ) { 
    this.formularioAgregar=this.formulario.group({
      nombre:[''],
      correo:['']
    })
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log('HOla')
    console.log(this.formularioAgregar.value);
    this.crudService.AgregarEmpleado(this.formularioAgregar.value).subscribe();
    this.routeador.navigateByUrl('/listar-empleado');
  }

}
