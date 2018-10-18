import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../../../router.animations';

@Component({
    selector: 'app-usuarios-adicionar',
    templateUrl: './usuarios.adicionar.component.html',
    styleUrls: ['./usuarios.adicionar.component.scss'],
    animations: [routerTransition()]
})
export class UsuariosAdicionarComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
