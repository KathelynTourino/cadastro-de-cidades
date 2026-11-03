import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cidade } from '../cidade';

@Component({
  selector: 'app-cidade',
  standalone: false,
  templateUrl: './cidade-component.html',
  styleUrl: './cidade-component.css'
})
export class CidadeComponent {

  formulario: FormGroup;

  cidades: Cidade[] = [];

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      id: [1],
      nome: ['', Validators.required],
      estado: ['', Validators.required],
      populacao: ['', Validators.required],
      regiao: ['', Validators.required]
    });

  }

  cadastrar(): void {

    if (this.formulario.valid) {

      const cidade: Cidade = this.formulario.value;

      this.cidades.push(cidade);

      this.formulario.reset({
        id: this.cidades.length + 1
      });

    }

  }

}
