import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public width: number;
  public level!: "L"|"M"|"Q"|"H";
  public background: "red"|"blue"|"white"|"green"|"yellow";
  public foreground: "orange"|"purple"|"grey"|"black"|"aquamarine";
  public original: any;

  constructor() {
    this.width = 80; //inicializar ancho a 200
    this.background = 'white';
    this.foreground = 'black';


  }

  ngOnInit(): void {
  }

  //Nivel de corrección (lowest, medium, equality, higher)
  updateLevel(newValue: "L"|"M"|"Q"|"H"){
    this.level = newValue;
  }

  updateWidth(newValue: number){
    this.width = newValue;
  }

  updatebackground(newValue: "red"|"blue"|"white"|"green"|"yellow"){
    this.background = newValue;
  }

  updateforeground(newValue: "orange"|"purple"|"grey"|"black"|"aquamarine"){
    this.foreground = newValue;
  }

  updateOriginalFormat(newValue: any){
    this.width = 80;
    this.background = 'white';
    this.foreground = 'black';
  }

  qrInfo = "www.remotestack.io";

}
