import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-formulario-cuentas',
  templateUrl: './formulario-cuentas.component.html',
  styleUrls: ['./formulario-cuentas.component.css']
})
export class FormularioCuentasComponent implements OnInit {

  numero1 : number=0;
  numero2 : number=0;
  resultado : string="0";

  constructor() { }

  sumar():void{
    this.resultado = (this.numero1 + this.numero2).toString();
  }

  
  restar():void{
    this.resultado = (this.numero1 - this.numero2).toString();
  }

  
  multiplicar():void{
    this.resultado = (this.numero1 * this.numero2).toString();
  }

  
  dividir():void{
    try{
      if (this.numero2==0) {
        throw new Error ("error al dividir por 0");
      }
       this.resultado = (this.numero1 / this.numero2).toString();
    }catch(w){
      
      this.resultado = (<Error>w).message;
      
    }
  }

  ngOnInit(): void {
  }

}
