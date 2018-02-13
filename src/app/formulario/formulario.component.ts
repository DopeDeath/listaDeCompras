import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, SelectControlValueAccessor, Validators } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'form-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  pereciveis = [
    { perecivel: "Sim" },
    { perecivel: "Não" }
  ];

  constructor(private http: Http) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      genero: new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      perecivel: new FormControl(null)
    });

    this.http.get('http://localhost:3050/produtos')
      .map(dados => dados.json())
      .subscribe(dados => console.log(dados, this.formulario))
  }

  onSubmit() {
    console.log(this.formulario)
    this.http.post('http://localhost:3050/produtos', this.formulario.value)
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);

        // this.formulario.reset();
      },
      (error: any) => alert('error'));
  }

validTouched(campo){
 return  this.formulario.get(campo).invalid && this.formulario.get(campo).touched
}

  cssError(campo){
    return{
      'has-feedback has-error': this.validTouched(campo)
    }
  }

}
