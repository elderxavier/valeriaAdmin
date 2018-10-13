import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { UsuariosComponent } from './usuarios.component'
import { UsuariosModule } from './usuarios.module'

describe('UsuariosComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UsuariosModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(UsuariosComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})
