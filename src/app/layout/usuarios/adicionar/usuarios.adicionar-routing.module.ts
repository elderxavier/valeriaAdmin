import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsuariosAdicionarComponent} from './usuarios.adicionar.component';

const routes: Routes = [
    {
        path: '', component: UsuariosAdicionarComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],    
    exports: [RouterModule]
})
export class UsuariosAdicionarRoutingModule {
}
