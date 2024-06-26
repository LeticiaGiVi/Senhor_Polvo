import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public router: Router) {}

  Home() {
    this.router.navigateByUrl("/home");
  }

  Perfil() {
    this.router.navigateByUrl("/perfil");
  }

  Metas() {
    this.router.navigateByUrl("/metas");
  }

  Configuracoes() {
    this.router.navigateByUrl("/configuracoes");
  }

  Materias() {
    this.router.navigateByUrl("/materia");
  }

  ngOnInit() {
  }

}