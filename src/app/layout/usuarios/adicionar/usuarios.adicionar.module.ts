import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {UsuariosAdicionarRoutingModule} from './usuarios.adicionar-routing.module';
import { UsuariosAdicionarComponent } from './usuarios.adicionar.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({    
    imports: [CommonModule, UsuariosAdicionarRoutingModule, PageHeaderModule],
    declarations: [UsuariosAdicionarComponent]    
})
export class UsuariosAdicionarModule {}
