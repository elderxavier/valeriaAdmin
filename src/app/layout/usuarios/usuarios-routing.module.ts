import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsuariosComponent} from './usuarios.component';
//import {UsuariosAdicionarComponent} from './adicionar/usuarios.adicionar.component';

const routes: Routes = [
    {
        path: '', component: UsuariosComponent,
        /*children: [
            //{ path: 'adicionar', component: UsuariosAdicionarComponent }
            {path: 'adicionar', loadChildren: './adicionar/usuarios.adicionar.module#UsuariosAdicionarModule'}
        ]*/
    },
    //{ path: 'adicionar', loadChildren: './adicionar/usuarios.adicionar.module#UsuariosAdicionarModule' }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {
}
